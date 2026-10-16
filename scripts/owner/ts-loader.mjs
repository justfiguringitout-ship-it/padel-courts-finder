/**
 * Minimal Node loader so the owner scripts and tests can import the app's
 * TypeScript directly: resolves "@/..." to src/ and extensionless imports to
 * .ts/.tsx, and compiles TS with the project's own `typescript` package
 * (which drops type-only imports the way Next does).
 *
 *   node --import ./scripts/owner/register.mjs scripts/apply-owner-edits.ts
 */
import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const SRC = path.join(ROOT, "src");
const EXTS = [".ts", ".tsx", ".mts", ".js", ".mjs"];

function tryFile(base) {
  if (existsSync(base) && statSync(base).isFile()) return base;
  for (const ext of EXTS) if (existsSync(base + ext)) return base + ext;
  for (const ext of EXTS) {
    const idx = path.join(base, `index${ext}`);
    if (existsSync(idx)) return idx;
  }
  return null;
}

export async function resolve(specifier, context, next) {
  let base = null;
  if (specifier.startsWith("@/")) base = path.join(SRC, specifier.slice(2));
  else if ((specifier.startsWith("./") || specifier.startsWith("../")) && context.parentURL?.startsWith("file:")) {
    base = path.resolve(path.dirname(fileURLToPath(context.parentURL)), specifier);
  }
  if (base) {
    const file = tryFile(base);
    if (file) return { url: pathToFileURL(file).href, shortCircuit: true, format: /\.(ts|tsx|mts)$/.test(file) ? "module" : undefined };
  }
  return next(specifier, context);
}

export async function load(url, context, next) {
  if (/\.(ts|tsx|mts)$/.test(url) && url.startsWith("file:")) {
    const source = readFileSync(fileURLToPath(url), "utf8");
    const out = ts.transpileModule(source, {
      fileName: fileURLToPath(url),
      compilerOptions: {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2022,
        jsx: ts.JsxEmit.ReactJSX,
        esModuleInterop: true,
        verbatimModuleSyntax: false,
        isolatedModules: true,
      },
    });
    return { format: "module", source: out.outputText, shortCircuit: true };
  }
  return next(url, context);
}
