# Step 1: Project Setup & Dependencies

## 1.1 Install Required Dependencies

```bash
npm install react-router-dom @types/react-router-dom
```

---

## 1.2 Copy Assets

Copy assets from `asset_source/` to `src/assets/`:

### Fonts (local, variable fonts)
```bash
mkdir -p src/assets/fonts
cp "asset_source/fonts/Bricolage_Grotesque/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf" src/assets/fonts/BricolageGrotesque-Variable.ttf
cp "asset_source/fonts/DM_Sans/DMSans-VariableFont_opsz,wght.ttf" src/assets/fonts/DMSans-Variable.ttf
cp "asset_source/fonts/DM_Sans/DMSans-Italic-VariableFont_opsz,wght.ttf" src/assets/fonts/DMSans-Italic-Variable.ttf
```

### Images
```bash
mkdir -p src/assets/images/projects
cp asset_source/Logo.svg src/assets/images/logo.svg
cp asset_source/Header.png src/assets/images/hero-bg.png
cp asset_source/Profil.png src/assets/images/profile.png
cp asset_source/Vagabundo.png src/assets/images/projects/vagabundo.png
```

### Icons
```bash
mkdir -p src/assets/icons/stars
cp asset_source/arrow.svg src/assets/icons/arrow.svg
cp asset_source/01star.svg src/assets/icons/stars/star-01.svg
cp asset_source/02star.svg src/assets/icons/stars/star-02.svg
cp asset_source/03star.svg src/assets/icons/stars/star-03.svg
cp asset_source/04star.svg src/assets/icons/stars/star-04.svg
```

---

## 1.3 Update index.html

Update `public/index.html`:
- Change `<title>` to "Marius Knipp - Product & Industrial Design"
- Add meta description
- Update favicon (optional)
