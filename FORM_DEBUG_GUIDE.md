# Contact Form 403 Error - Debugging Guide

## Current Status
The contact form is getting a 403 Forbidden error from Formspree. This is most likely due to domain authorization issues.

## What I Added

### 1. Enhanced Logging
The form now logs detailed information to the browser console:
- Current URL and origin
- Form data being submitted
- Response status and headers
- Detailed error messages

### 2. User-Friendly Error Messages
- Shows an alert if submission fails
- Provides alternative contact method (email directly)

## Steps to Debug

### Step 1: Check Console Logs
1. Open your browser DevTools (F12 or Right-click → Inspect)
2. Go to the Console tab
3. Try submitting the form
4. Look for logs starting with 🔍, 📍, 📝, 📡, ✅, or ❌
5. **Share the output** - especially the error response text

### Step 2: Most Likely Causes

#### A. Domain Not Whitelisted (MOST COMMON)
**Solution:**
1. Log into your Formspree account: https://formspree.io/login
2. Find the form with ID `movvdner`
3. Go to form settings
4. Add your domain to the whitelist:
   - Development: `http://localhost:3000`
   - Production: `https://biscaynevending.com`
   - Also try: `https://www.biscaynevending.com` if you use www

#### B. Form Endpoint Issue
The form endpoint `movvdner` might be:
- Expired (if on free plan)
- Deactivated
- From a different account

**To verify:**
1. Log into Formspree
2. Check if the form exists and is active
3. Check the submission limit hasn't been reached

#### C. CORS Configuration
Formspree might need CORS properly configured in their dashboard for your domain.

### Step 3: Alternative Solutions

#### Option 1: Create a New Formspree Form
1. Go to https://formspree.io
2. Create a new form
3. Get the new endpoint (like `f/xyzabc123`)
4. Update line 33 in `ContactForm.tsx`:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_NEW_ID', {
   ```

#### Option 2: Use Direct Form Submission (Temporary)
If you want the form to work immediately while debugging:

1. Open `ContactForm.tsx`
2. Change line 15 from:
   ```typescript
   const [useDirectSubmit, setUseDirectSubmit] = useState(false)
   ```
   to:
   ```typescript
   const [useDirectSubmit, setUseDirectSubmit] = useState(true)
   ```

This bypasses the fetch API and uses traditional form submission. The user will be redirected to Formspree's thank you page.

#### Option 3: Switch to a Different Form Service

**Free Alternatives to Formspree:**
1. **Web3Forms** (https://web3forms.com) - No account needed
2. **FormSubmit** (https://formsubmit.co) - No account needed
3. **Netlify Forms** (if hosting on Netlify)
4. **Vercel Contact Form** (if hosting on Vercel)

**Example with Web3Forms (No account needed):**
```typescript
// In ContactForm.tsx, line 33, replace with:
const response = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    access_key: 'YOUR_ACCESS_KEY', // Get from web3forms.com
    name: formData.get('name'),
    email: formData.get('email'),
    business: formData.get('business'),
    message: formData.get('message'),
  })
})
```

## Expected Console Output

### Successful Submission:
```
🔍 Form submission starting...
📍 Current URL: http://localhost:3000/contact
📍 Origin: http://localhost:3000
📝 Form data:
  name: John Doe
  business: Acme Corp
  email: john@acme.com
  message: I need vending machines
📡 Response status: 200
📡 Response headers: {...}
✅ Form submitted successfully!
📨 Response data: {ok: true, ...}
```

### Failed Submission (What you're seeing):
```
🔍 Form submission starting...
📍 Current URL: http://localhost:3000/contact
📍 Origin: http://localhost:3000
📝 Form data:
  name: John Doe
  ...
📡 Response status: 403
📡 Response headers: {...}
❌ Form submission failed
Status: 403
Status text: Forbidden
Error response: [This will tell us WHY it's forbidden]
```

## Action Items

1. **Try submitting the form again** and check the console
2. **Copy the error response text** from the console
3. **Log into Formspree** and check:
   - Is the form active?
   - What domains are whitelisted?
   - Are you on a free plan with submission limits?
4. **Share the console output** if you need more help

## Quick Fix Option

If you need this working IMMEDIATELY, I recommend switching to **Web3Forms** which doesn't require domain whitelisting:

1. Go to https://web3forms.com
2. Enter your email: hello@biscaynevending.com
3. Get your access key
4. I can update the form to use Web3Forms instead

Let me know what the console shows!
