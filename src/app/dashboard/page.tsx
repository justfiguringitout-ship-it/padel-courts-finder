import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Home, Palette, Code2, Sparkles, Type, ExternalLink,
  Heart, Star, Zap, Moon, Sun, Bell, Settings
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <h1 className="text-2xl font-bold">Component Showcase</h1>
            </div>
            <Badge variant="secondary">39+ Components</Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="mb-8">
          <Alert>
            <Sparkles className="h-4 w-4" />
            <AlertTitle>shadcn/ui Ecosystem</AlertTitle>
            <AlertDescription>
              Explore the complete component library, theme system, and design patterns. 
              All components are built with accessibility and TypeScript integration.
            </AlertDescription>
          </Alert>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Component Library */}
          <Card className="col-span-full lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="w-5 h-5" />
                    Component Library
                  </CardTitle>
                  <CardDescription>
                    Production-ready React components
                  </CardDescription>
                </div>
                <Link href="https://ui.shadcn.com/docs/components" target="_blank">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Docs
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="buttons">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="buttons">Buttons</TabsTrigger>
                  <TabsTrigger value="forms">Forms</TabsTrigger>
                  <TabsTrigger value="feedback">Feedback</TabsTrigger>
                  <TabsTrigger value="data">Data</TabsTrigger>
                </TabsList>
                
                <TabsContent value="buttons" className="space-y-4 mt-4">
                  <div className="flex flex-wrap gap-2">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">
                      <Star className="w-4 h-4" />
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="forms" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label>Interactive Switch</Label>
                    <div className="flex items-center space-x-2">
                      <Switch id="demo-switch" />
                      <Label htmlFor="demo-switch">Enable notifications</Label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Progress Indicator</Label>
                    <Progress value={66} className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <Label>Slider Control</Label>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                </TabsContent>
                
                <TabsContent value="feedback" className="space-y-4 mt-4">
                  <Alert>
                    <Bell className="h-4 w-4" />
                    <AlertTitle>Info Alert</AlertTitle>
                    <AlertDescription>
                      This is an informational alert component.
                    </AlertDescription>
                  </Alert>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </TabsContent>
                
                <TabsContent value="data" className="space-y-4 mt-4">
                  <div className="text-sm text-muted-foreground">
                    <p><strong>Available components:</strong></p>
                    <p className="mt-2">Table, Card, Accordion, Tabs, Separator, Skeleton, and more...</p>
                    <p className="mt-2">All components include TypeScript types and accessibility features.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Theme System */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5" />
                    Theme System
                  </CardTitle>
                  <CardDescription>
                    OKLCH color palette
                  </CardDescription>
                </div>
                <Link href="https://ui.shadcn.com/themes" target="_blank">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Primary</span>
                  <div className="w-8 h-8 rounded-md bg-primary" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Secondary</span>
                  <div className="w-8 h-8 rounded-md bg-secondary" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Accent</span>
                  <div className="w-8 h-8 rounded-md bg-accent" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Muted</span>
                  <div className="w-8 h-8 rounded-md bg-muted" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Destructive</span>
                  <div className="w-8 h-8 rounded-md bg-destructive" />
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4" />
                  <span className="text-sm">Light</span>
                </div>
                <Switch />
                <div className="flex items-center gap-2">
                  <Moon className="w-4 h-4" />
                  <span className="text-sm">Dark</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lucide Icons */}
          <Card className="col-span-full md:col-span-1">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Lucide Icons
                  </CardTitle>
                  <CardDescription>
                    1000+ React icons
                  </CardDescription>
                </div>
                <Link href="https://lucide.dev/icons/" target="_blank">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center gap-2 p-2 hover:bg-accent rounded-md transition-colors">
                  <Home className="w-6 h-6" />
                  <span className="text-xs text-muted-foreground">Home</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-2 hover:bg-accent rounded-md transition-colors">
                  <Heart className="w-6 h-6" />
                  <span className="text-xs text-muted-foreground">Heart</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-2 hover:bg-accent rounded-md transition-colors">
                  <Star className="w-6 h-6" />
                  <span className="text-xs text-muted-foreground">Star</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-2 hover:bg-accent rounded-md transition-colors">
                  <Zap className="w-6 h-6" />
                  <span className="text-xs text-muted-foreground">Zap</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-2 hover:bg-accent rounded-md transition-colors">
                  <Bell className="w-6 h-6" />
                  <span className="text-xs text-muted-foreground">Bell</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-2 hover:bg-accent rounded-md transition-colors">
                  <Settings className="w-6 h-6" />
                  <span className="text-xs text-muted-foreground">Settings</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-2 hover:bg-accent rounded-md transition-colors">
                  <Code2 className="w-6 h-6" />
                  <span className="text-xs text-muted-foreground">Code</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-2 hover:bg-accent rounded-md transition-colors">
                  <Palette className="w-6 h-6" />
                  <span className="text-xs text-muted-foreground">Palette</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Import: <code className="bg-muted px-1 rounded">lucide-react</code>
              </p>
            </CardContent>
          </Card>

          {/* Typography */}
          <Card className="col-span-full md:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Type className="w-5 h-5" />
                    Typography Hierarchy
                  </CardTitle>
                  <CardDescription>
                    Consistent text styles
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">Heading 1</h1>
                <p className="text-sm text-muted-foreground">text-4xl font-bold</p>
              </div>
              <Separator />
              <div>
                <h2 className="text-3xl font-semibold mb-2">Heading 2</h2>
                <p className="text-sm text-muted-foreground">text-3xl font-semibold</p>
              </div>
              <Separator />
              <div>
                <h3 className="text-2xl font-medium mb-2">Heading 3</h3>
                <p className="text-sm text-muted-foreground">text-2xl font-medium</p>
              </div>
              <Separator />
              <div>
                <p className="text-base mb-2">Body text with proper line height and spacing for readability.</p>
                <p className="text-sm text-muted-foreground">text-base (16px)</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground mb-2">Muted foreground text for secondary information.</p>
                <p className="text-xs text-muted-foreground">text-sm text-muted-foreground</p>
              </div>
            </CardContent>
          </Card>

          {/* Documentation Links */}
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Complete Ecosystem Documentation</CardTitle>
              <CardDescription>
                Explore all resources and examples from shadcn/ui
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Link href="https://ui.shadcn.com/docs/components" target="_blank">
                  <Button variant="outline" className="w-full justify-start">
                    <Code2 className="w-4 h-4 mr-2" />
                    Components
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </Button>
                </Link>
                <Link href="https://ui.shadcn.com/themes" target="_blank">
                  <Button variant="outline" className="w-full justify-start">
                    <Palette className="w-4 h-4 mr-2" />
                    Themes
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </Button>
                </Link>
                <Link href="https://ui.shadcn.com/colors" target="_blank">
                  <Button variant="outline" className="w-full justify-start">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Colors
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </Button>
                </Link>
                <Link href="https://lucide.dev/icons/" target="_blank">
                  <Button variant="outline" className="w-full justify-start">
                    <Star className="w-4 h-4 mr-2" />
                    Icons
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link href="/">
            <Button size="lg">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}


