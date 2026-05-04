# 🎬 How to Add Instagram Video to Hero Background

## Step 1: Download the Video

You have two options:

### Option A: Using Online Downloader (Easiest)
1. Go to **https://igdl.co** or **https://www.instadownload.org**
2. Paste the Instagram link: `https://www.instagram.com/p/DO2HdpVEs2f`
3. Click "Download"
4. Download the video file

### Option B: Using Desktop Software (Better Quality)
1. Download **IG Story Downloader** or **4K Stogram**
2. Paste the Instagram link
3. Download at highest quality (1080p or 4K)

### Option C: Using Command Line (Advanced)
```bash
pip install instagrapi
python -c "from instagrapi import Client; c = Client(); c.download_video('DO2HdpVEs2f', folder_path='.')"
```

---

## Step 2: Add Video to Website

### After downloading, you'll have a video file (e.g., `video.mp4`)

1. **Rename it** to `hero-video.mp4`
2. **Place it** in the same folder as `index.html`:
   ```
   d:\RiatAuto Studio\
   ├── index.html
   ├── styles.css
   ├── script.js
   ├── hero-video.mp4    ← Add video here
   └── README.md
   ```

3. **Open** `index.html` in your browser
4. **Done!** The video should appear as your hero background

---

## 📱 Video Requirements

### Optimal Video Specs:
- **Format**: MP4 (most compatible) or WebM
- **Resolution**: 1920x1080 or higher
- **Length**: 15-30 seconds (loops continuously)
- **File Size**: Keep under 10MB for fast loading

### How to Compress Video (if too large)

**Using Online Tool:**
1. Go to **https://www.freeconvert.com/video-compressor**
2. Upload your video
3. Set quality to "Medium"
4. Download compressed version

**Using FFmpeg (command line):**
```bash
ffmpeg -i input-video.mp4 -vcodec libx264 -crf 28 hero-video.mp4
```

---

## 🎨 Customizing Video Overlay

The dark overlay helps readability. To adjust it, edit `styles.css`:

```css
.hero-overlay {
    background: rgba(30, 60, 114, 0.5);  /* Change last number (0-1) */
}
```

Examples:
- `0.3` - Light overlay (more video visible)
- `0.5` - Medium overlay (current)
- `0.7` - Dark overlay (text more readable)

---

## 🔧 Troubleshooting

### Video not showing?
- [ ] File is named exactly `hero-video.mp4`
- [ ] File is in same folder as `index.html`
- [ ] Browser supports HTML5 video (try Chrome/Firefox)
- [ ] Video format is MP4 (check file extension)

### Video is too large or slow?
- [ ] Compress video using the tools above
- [ ] Reduce resolution to 1280x720
- [ ] Trim length to 10-20 seconds

### Video keeps pausing?
- [ ] Make sure it has `autoplay muted loop` attributes (already set)
- [ ] Check browser autoplay permissions

### Text is hard to read?
- [ ] Increase overlay darkness (change `0.5` to `0.7` in CSS)
- [ ] Add text shadow to `.hero-content h1` and `p`

---

## 📊 Alternative: Use Different Video

If you want to use a different video:

1. Download your video file
2. Rename it to `hero-video.mp4`
3. Replace the file in your folder
4. Refresh your browser

---

## 🚀 Quick Start

1. Download video from Instagram
2. Rename to `hero-video.mp4`
3. Drop in project folder
4. Open `index.html`
5. Enjoy! 🎉

**That's it!** No code changes needed.

---

## 📝 Current Setup

Your `index.html` already has video support enabled:

```html
<video class="hero-video" autoplay muted loop playsinline>
    <source src="hero-video.mp4" type="video/mp4">
    <source src="hero-video.webm" type="video/webm">
</video>
<div class="hero-overlay"></div>
```

Just add the video file and you're done!
