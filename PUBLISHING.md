# Publishing Guide for Qloo TypeScript SDK

This guide walks you through the complete process of publishing your Qloo TypeScript SDK to npm.

## Pre-Publishing Checklist

### 1. Update Package Information

Before publishing, update these fields in `package.json`:

```json
{
  "name": "qloo-typescript-sdk",  // or "your-org/qloo-typescript-sdk" for scoped packages
  "version": "1.0.0",
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/qloo-typescript-sdk.git"
  },
  "bugs": {
    "url": "https://github.com/yourusername/qloo-typescript-sdk/issues"
  },
  "homepage": "https://github.com/yourusername/qloo-typescript-sdk#readme"
}
```

### 2. Set Up GitHub Repository

1. Create a new repository on GitHub
2. Add your local repository as remote:
   ```bash
   git remote add origin https://github.com/yourusername/qloo-typescript-sdk.git
   ```
3. Push your code:
   ```bash
   git push -u origin main
   git push origin develop
   ```

### 3. Configure npm Publishing

1. Create an npm account at [npmjs.com](https://www.npmjs.com/)
2. Login to npm:
   ```bash
   npm login
   ```
3. Verify your login:
   ```bash
   npm whoami
   ```

## Publishing Steps

### Step 1: Final Pre-publish Tests

```bash
# Clean and build
npm run clean
npm run build

# Run linting
npm run lint

# Run type checking
npm run typecheck

# Test installation locally
npm pack
```

### Step 2: Check Package Contents

```bash
# See what files will be published
npm publish --dry-run
```

### Step 3: Publish to npm

```bash
# For first-time publishing
npm publish

# For scoped packages (if using @yourorg/qloo-typescript-sdk)
npm publish --access=public
```

## Version Management

### Semantic Versioning

- **Major (1.0.0 → 2.0.0)**: Breaking changes
- **Minor (1.0.0 → 1.1.0)**: New features, backward compatible
- **Patch (1.0.0 → 1.0.1)**: Bug fixes, backward compatible

### Publishing Updates

```bash
# Update version and publish
npm version patch  # for bug fixes
npm version minor  # for new features
npm version major  # for breaking changes

# Then publish
npm publish
```

## Automated Publishing with GitHub Actions

The included GitHub Actions workflow will automatically:
- Run tests and linting on PRs
- Publish to npm when you create a GitHub release

### Creating a Release

1. **Set up npm token** in GitHub repository secrets:
   - Go to: Repository → Settings → Secrets and variables → Actions
   - Add secret: `NPM_TOKEN` with your npm authentication token

2. **Get npm token**:
   ```bash
   npm token create --read-only
   ```

3. **Create a release**:
   - Go to GitHub → Releases → "Create a new release"
   - Tag version: `v1.0.0`
   - Release title: `v1.0.0`
   - Add release notes

## Package Name Considerations

### Option 1: Unscoped Package
```json
{
  "name": "qloo-typescript-sdk"
}
```
**Pros**: Shorter import name
**Cons**: Name might be taken

### Option 2: Scoped Package
```json
{
  "name": "@yourorg/qloo-typescript-sdk"
}
```
**Pros**: Namespace protection, easier to manage
**Cons**: Longer import name

## Post-Publishing

### 1. Update Documentation

- Update README.md with correct installation instructions
- Update any references to the package name
- Add badges for npm version, downloads, etc.

### 2. Set Up GitHub Repository

- Add topics/tags to your repository
- Create issues and PR templates
- Set up branch protection rules

### 3. Monitor and Maintain

- Monitor npm downloads: `npm stat qloo-typescript-sdk`
- Respond to issues and PRs
- Keep dependencies updated

## Troubleshooting

### Common Issues

1. **Package name already exists**:
   ```bash
   npm search qloo-typescript-sdk
   ```
   If taken, use a scoped package or different name.

2. **Permission denied**:
   ```bash
   npm login
   npm whoami
   ```

3. **Build fails**:
   ```bash
   npm run clean
   npm install
   npm run build
   ```

### Publishing Checklist

- [ ] Updated package.json with correct information
- [ ] Created GitHub repository
- [ ] Logged into npm
- [ ] Tested build locally
- [ ] Reviewed package contents with `npm publish --dry-run`
- [ ] Set up GitHub Actions secrets (NPM_TOKEN)
- [ ] Published to npm
- [ ] Created GitHub release
- [ ] Updated documentation
- [ ] Announced to community

## Best Practices

1. **Use semantic versioning** consistently
2. **Test thoroughly** before publishing
3. **Keep dependencies minimal** and up-to-date
4. **Document breaking changes** clearly
5. **Respond to issues** promptly
6. **Use GitHub releases** for change tracking
7. **Monitor package health** regularly

## Additional Resources

- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Semantic Versioning](https://semver.org/)
- [GitHub Actions for npm](https://docs.github.com/en/actions/publishing-packages/publishing-nodejs-packages)
- [TypeScript Package Publishing](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) 