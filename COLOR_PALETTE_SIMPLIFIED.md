# Simplified Padel Directory Color Palette

## 🎨 **The Simple Truth: 3 Colors + Neutrals**

**Most successful sites use 3-5 colors MAX.** Here's your streamlined palette:

---

## ✅ **YOUR COLOR PALETTE (Final)**

### **Primary: Padel Green**
```
Main: #16A34A (Bright padel court green)
Dark: #15803D (Deeper, for hover states)
Light: #DCFCE7 (Pale green for backgrounds)
```
**Use for:** Primary buttons, active states, outdoor badges, brand identity (60% of color usage)

---

### **Accent: Court Orange**
```
Main: #F97316 (Vibrant orange - energy)
Dark: #EA580C (Hover state)
```
**Use for:** CTAs, "Book Now" buttons, featured items, urgency (15% of color usage)

---

### **Supporting: Glass Blue** (Optional - Use Sparingly)
```
Main: #0EA5E9 (Sky blue - glass walls)
```
**Use for:** Info badges, secondary links, indoor club indicators (10% of color usage)

---

### **Neutrals: Gray Scale**
```
White: #FFFFFF
Light: #F3F4F6 (Backgrounds)
Medium: #6B7280 (Secondary text)
Dark: #1F2937 (Body text, headers)
Black: #111827 (Maximum contrast)
```
**Use for:** Text, backgrounds, borders, structure (15% of color usage)

---

## 🎯 **Simplified Application**

### **Primary Actions**
```css
/* Main CTA - Orange (stands out!) */
.btn-primary {
  background: #F97316; /* Orange */
  color: #FFFFFF;
}

/* Secondary action - Green (brand) */
.btn-secondary {
  background: #16A34A; /* Green */
  color: #FFFFFF;
}

/* Tertiary - Ghost */
.btn-tertiary {
  border: 2px solid #16A34A; /* Green */
  color: #16A34A;
  background: transparent;
}
```

---

### **Text & Backgrounds**
```css
/* Keep it simple */
body {
  background: #FFFFFF;
  color: #1F2937; /* Dark gray */
}

/* Sections */
.section-alt {
  background: #F3F4F6; /* Light gray */
}

/* Headers */
h1, h2, h3 {
  color: #1F2937; /* Dark gray (not black) */
}

/* Links */
a {
  color: #16A34A; /* Green */
}

/* Secondary text */
.text-secondary {
  color: #6B7280; /* Medium gray */
}
```

---

### **Badges & Labels**
```css
/* Status badges - Just use green */
.badge {
  background: #16A34A; /* Green */
  color: #FFFFFF;
}

/* Indoor/Outdoor - Subtle difference */
.indoor {
  background: #E0F2FE; /* Pale blue */
  color: #0284C7; /* Blue text */
}

.outdoor {
  background: #DCFCE7; /* Pale green */
  color: #15803D; /* Green text */
}
```

---

## 🎯 **The Rule: 60-30-10**

**60% - Neutral** (White, light gray)
- Backgrounds
- Cards
- Content areas

**30% - Green** (Primary brand)
- Nav highlights
- Active states
- Badges
- Secondary buttons

**10% - Orange** (Accent)
- Primary CTAs only
- Featured items
- **Strategic pops**

**Optional 5% - Blue** (Supporting)
- Info only
- Indoor indicators
- Links (alternative to green)

---

## ✅ **Even Simpler? Go 2 Colors**

### **Option: Just Green + Orange**

**Primary: Green (#16A34A)**
- Brand, buttons, active states

**Accent: Orange (#F97316)**  
- CTAs, highlights

**Neutrals: Grays**
- Everything else

**That's it.** Clean, simple, memorable.

---

## 🎨 **Tailwind Config (Simplified)**

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#16A34A', // Green
        dark: '#15803D',
        light: '#DCFCE7',
      },
      accent: {
        DEFAULT: '#F97316', // Orange
        dark: '#EA580C',
      },
    },
  },
}
```

**Usage:**
```jsx
<button className="bg-primary hover:bg-primary-dark text-white">
  Search Clubs
</button>

<button className="bg-accent hover:bg-accent-dark text-white">
  Book Now →
</button>
```

**Simple. Clean. Effective.** ✅

---

## 🎯 **Design Principle: Less is More**

**What great sites do:**
- **Airbnb:** Red + white + grays
- **Stripe:** Purple + white + grays  
- **Spotify:** Green + black + white

**What you should do:**
- **Green** (padel courts) + **Orange** (energy) + **Grays**
- That's it
- **Maybe** blue for info (optional)

**Simplicity = Professional**

---

## ✅ **Final Recommendation**

### **Your Palette:**

1. **Green #16A34A** - Primary brand color (padel turf)
2. **Orange #F97316** - Accent for CTAs (energy, action)
3. **Grays** - Text and backgrounds

**Optional:** Blue #0EA5E9 for indoor/info badges

**That's 2-3 colors.** Perfect. Professional. Padel-inspired without being overwhelming.

**Sound better?** 🎨

