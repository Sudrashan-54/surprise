# QR Code Setup Guide

## 📱 How to Generate QR Codes for Your Song Dedication Journey

### Option 1: QR Code Generator (Free Online) ⭐ EASIEST

**Website:** https://www.qr-code-generator.com/

**Steps:**
1. Visit the website
2. Click "URL" option
3. Enter your page URL:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO/page1.html
   https://YOUR_USERNAME.github.io/YOUR_REPO/page2.html
   ... and so on
   ```
4. Click "Create QR Code"
5. Customize (optional):
   - Change color
   - Add logo
   - Adjust size
6. Download as PNG
7. Print on paper

### Option 2: QR Server (Ultra Fast)

**Website:** https://qr.page

**Steps:**
1. Enter your URL in the search box
2. QR code appears instantly
3. Right-click → "Save image as"
4. Print

### Option 3: Google Charts API (No signup needed)

**URL Pattern:**
```
https://chart.googleapis.com/chart?chs=300x300&chld=L|0&cht=qr&chl=YOUR_URL_HERE
```

**Example:**
```
https://chart.googleapis.com/chart?chs=300x300&chld=L|0&cht=qr&chl=https%3A%2F%2Fyourusername.github.io%2Frepo-name%2Fpage1.html
```

(URL encode your link first at: https://www.urlencoder.org/)

---

## 🎯 URL Format Reference

### Once deployed on GitHub Pages:

```
Landing Page: https://YOUR_USERNAME.github.io/REPO_NAME/index.html
Paper 1:      https://YOUR_USERNAME.github.io/REPO_NAME/page1.html
Paper 2:      https://YOUR_USERNAME.github.io/REPO_NAME/page2.html
Paper 3:      https://YOUR_USERNAME.github.io/REPO_NAME/page3.html
...
Paper 10:     https://YOUR_USERNAME.github.io/REPO_NAME/page10.html
```

**Example (Real):**
```
https://john-doe.github.io/love-songs-journey/page1.html
```

---

## 🖨️ Printing Tips

### Best Results:
1. **Paper Type:** Use quality card stock (200-300 gsm)
2. **Size:** 4"x4" (10cm x 10cm) minimum for reliable scanning
3. **Printer:** Color printer recommended (though B&W works)
4. **Layout:** Leave white border around QR code
5. **Protection:** Consider laminating for durability

### Recommended Sizing:
- **Small:** 2"x2" (5cm x 5cm) - minimum scannable
- **Medium:** 3"x3" (7.5cm x 7.5cm) - comfortable scanning
- **Large:** 4"x4" (10cm x 10cm) - easy scanning
- **Extra:** 5"x5" (12.5cm x 12.5cm) - decorative

---

## 🎨 Design Ideas

### Presentation Options:

1. **Simple Card Style**
   - QR code centered on card
   - Romantic decoration around QR
   - Number indicator (Paper 1, 2, 3...)

2. **Decorative Style**
   - QR code in center
   - Song name above
   - Heart decorations
   - Personal message below

3. **Gift Box Style**
   - Wrapped in envelope
   - Beautiful paper
   - QR code sticker on top

4. **Puzzle Style**
   - Each paper is part of a bigger image when laid out
   - QR code integrated into design

---

## ✅ Testing Before Printing

### Test Each QR Code:

1. **Generate QR Code**
2. **Take Screenshot** of QR code
3. **Test on Phone:**
   - Use built-in camera app (iOS) or Google Lens
   - Point at screenshot
   - Verify it opens correct page
   - Repeat for all 10 papers

### Common Issues:
- **"404 Page Not Found"** → Check GitHub Pages is enabled
- **Page won't load** → Verify deployment is complete (wait 1-2 minutes)
- **QR won't scan** → Make sure size is adequate (min 2"x2")
- **Wrong URL in QR** → Regenerate with correct URL

---

## 🚀 Batch QR Generation Script (Advanced)

If you want to generate all 10 QR codes at once, use this HTML locally:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Bulk QR Generator</title>
    <script src="https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js"></script>
</head>
<body>
    <h1>QR Code Generator</h1>
    <div id="codes"></div>
    
    <script>
        const baseUrl = "https://YOUR_USERNAME.github.io/REPO_NAME";
        const container = document.getElementById("codes");
        
        for (let i = 1; i <= 10; i++) {
            const url = `${baseUrl}/page${i}.html`;
            const div = document.createElement("div");
            div.style.margin = "20px";
            div.style.display = "inline-block";
            div.innerHTML = `<h2>Paper ${i}</h2><div id="qr${i}"></div>`;
            container.appendChild(div);
            
            new QRCode(document.getElementById(`qr${i}`), url);
        }
    </script>
</body>
</html>
```

Save as `generate-qr.html` and open in browser. All 10 QR codes will appear instantly!

---

## 📝 Checklist Before Printing

- [ ] All pages deployed on GitHub Pages
- [ ] Each QR code tested on phone
- [ ] Correct URLs in each QR code
- [ ] Paper/cardstock purchased
- [ ] Printer ready with ink
- [ ] Design finalized
- [ ] Printed and cut
- [ ] Ready to gift! 💕

---

**Pro Tip:** Generate QR codes the day before or morning of the gift to ensure URLs are fresh and tested!
