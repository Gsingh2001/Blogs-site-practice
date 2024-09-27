To document the integration of the MASV Web Uploader in a GitHub repository, you can create a comprehensive README.md file. Here's an example structure for your documentation:

---

# MASV Web Uploader Integration with React

This document outlines how to integrate the MASV Web Uploader into a React application to upload files to a MASV Portal. This integration allows for flexible, browser-based file uploading without needing to handle the complexities of the MASV API directly.

## Overview

The MASV Web Uploader provides a simplified way to upload files from your web application to a MASV Portal. You can customize your file picker and manage integration workflows while leveraging MASV's infrastructure for file handling and transfer.

## Prerequisites

- **MASV Account:** Log in or sign up at [MASV](https://massive.io) to create a Portal.
- **Portal Subdomain:** Create a new Portal or use an existing one and note its subdomain (e.g., if the Portal domain is `example1234.portal.massive.io`, the subdomain is `example1234`).
- **React Setup:** Ensure you have a React project set up.

## Installation

Install the MASV Web Uploader package:

```bash
yarn add @masvio/uploader
```

## Integration Steps

### 1. Fetch Portal ID

Create a helper function to fetch the Portal ID using its subdomain:

```javascript
const fetchPortalID = async (subdomain) => {
  const request = await fetch(`https://api.massive.app/v1/subdomains/portals/${subdomain}`);
  const { id } = await request.json();
  return id;
};
```

### 2. Create a Package

Create a function to create a MASV package for a Portal:

```javascript
const createPackage = async (portalID, name, sender, description) => {
  const request = await fetch(`https://api.massive.app/v1/portals/${portalID}/packages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, sender, description }),
  });

  const { id, access_token } = await request.json();
  return { id, access_token };
};
```

### 3. Initialize Uploader

Initialize the Uploader instance using the package ID and access token:

```javascript
import { Uploader } from "@masvio/uploader";

const initializeUploader = async (subdomain, name, sender, description) => {
  const portalID = await fetchPortalID(subdomain);
  const { id, access_token } = await createPackage(portalID, name, sender, description);

  const uploader = new Uploader(id, access_token, 'https://api.massive.app');

  return uploader;
};
```

### 4. Handle File Selection

Handle file selection using an HTML `<input>` element:

```javascript
const handleFile
