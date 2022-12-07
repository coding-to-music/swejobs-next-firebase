# swejobs-next-firebase

# 🚀 Software Engineer Jobs and Trends Tracker 🚀

https://github.com/coding-to-music/swejobs-next-firebase

https://swejobs-next-firebase.vercel.app

From / By https://github.com/kevinshen56714/SWEJobs.fyi

https://swejobs.fyi/

https://twitter.com/SWEJobsfyi

## Environment variables:

```java
if (process.env.NODE_ENV === 'production') {
if (process.env.NODE_ENV === 'development') {

if (secret !== process.env.NEXT_PUBLIC_REVALIDATE_TOKEN) {

serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string)

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}
```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/swejobs-next-firebase.git
git push -u origin main
```

<p align="center">
  <a href="https://swejobs.fyi/"><img src="https://github.com/kevinshen56714/SWEJobs.fyi/raw/main/public/main-schematic.png" alt="SWEJobs.fyi" width="450rem"></a>
</p>
<p align="center">
    <em>SWEJobs.fyi, skill-driven software engineer job search and market analysis tool</em>
</p>

---

**Website**: <a href="https://swejobs.fyi" target="_blank">https://swejobs.fyi</a>

**Get Latest Updates**: <a href="https://twitter.com/SWEJobsfyi" target="_blank">https://twitter.com/SWEJobsfyi</a>

---

## Built With

- NextJS/ReactJS - server-side component rendering frameworks
- TailwindCSS/HeadlessUI - UI styling and library
- Nivo/D3 - interactive data visualization
- Firebase - NoSQL database
- TypeScript/ES6+

## Key features

- [Constantly updated SWE job boards](#swe-job-boards)
- [Intuitive skill-based filtering tool](#intuitive-filtering-tool)
- [Detailed weekly trends and monthly stats](#detailed-trends-and-stats)
- [Interactive data visualization](#interactive-data-visualization)

### SWE job boards

![image](https://user-images.githubusercontent.com/11501902/201210657-28604b3c-1951-45d6-97be-7503cb42c469.png)

### Intuitive filtering tool

![image](https://user-images.githubusercontent.com/11501902/201210826-75ec61dd-92d6-4e80-86b8-cdf89e910aff.png)

### Detailed trends and stats

![image](https://user-images.githubusercontent.com/11501902/201181658-f6d2f00c-fc9a-4f98-b295-b58943ced19c.png)

### Interactive data visualization

![image](https://user-images.githubusercontent.com/11501902/201181485-892a67bb-c5cb-45bb-bce5-02f143ea91e5.png)

## Contributing

Your feedback and contributions are welcome! Feel free to open any [discussions](https://github.com/kevinshen56714/SWEJobs.fyi/discussions) or [feature requests](https://github.com/kevinshen56714/SWEJobs.fyi/issues/new?assignees=&labels=&template=feature_request.md). Any pull requests would be greatly appreciated as well! See below for more details on how to run a local development server.

### Run local server

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the local development version.

You can start editing the pages by modifying the files under the `pages/` directory. The page auto-updates as you edit the file.

For local development, instead of fetching real data from Firebase, we use mock data from the `data/` directory.

### Learn More About NextJS

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## See what packages need to be updated

```
npm outdated
```

Output

```
Package                      Current   Wanted    Latest  Location                                  Depended by
@types/node                   18.8.4   18.8.4  18.11.10  node_modules/@types/node                  swejobs-next-firebase
@types/react                 18.0.21  18.0.21   18.0.26  node_modules/@types/react                 swejobs-next-firebase
eslint                        8.25.0   8.25.0    8.29.0  node_modules/eslint                       swejobs-next-firebase
prettier-plugin-tailwindcss   0.1.13   0.1.13     0.2.0  node_modules/prettier-plugin-tailwindcss  swejobs-next-firebase
typescript                     4.8.4    4.8.4     4.9.3  node_modules/typescript                   swejobs-next-firebase
```

## Check for updates using ncu

```
ncu
```

```
Checking /mnt/volume_nyc1_01/swejobs-next-firebase/package.json
[====================] 23/23 100%

 @headlessui/react              ^1.7.3  →    ^1.7.4
 @heroicons/react              ^2.0.12  →   ^2.0.13
 @types/node                    18.8.4  →  18.11.10
 @types/react                  18.0.21  →   18.0.26
 autoprefixer                 ^10.4.12  →  ^10.4.13
 eslint                         8.25.0  →    8.29.0
 eslint-config-next            ^13.0.0  →   ^13.0.6
 firebase                      ^9.12.0  →   ^9.14.0
 firebase-admin                ^11.2.0  →   ^11.3.0
 heroicons                     ^2.0.12  →   ^2.0.13
 next                          ^13.0.0  →   ^13.0.6
 postcss                       ^8.4.18  →   ^8.4.19
 prettier                       ^2.7.1  →    ^2.8.0
 prettier-plugin-tailwindcss   ^0.1.13  →    ^0.2.0
 sass                          ^1.55.0  →   ^1.56.1
 tailwindcss                    ^3.1.8  →    ^3.2.4
 typescript                      4.8.4  →     4.9.3

Run ncu -u to upgrade package.json
```

## Asking for help

https://github.com/vercel/vercel/discussions/9006

### Collecting page data .SyntaxError: Unexpected token u in JSON at position 0

Hello, my repo is here: https://github.com/coding-to-music/swejobs-next-firebase

I am attempting to build a project I found on GitHub

From / By https://github.com/kevinshen56714/SWEJobs.fyi

https://swejobs.fyi/ (pretty good site)

I am trying to do a build and I get an error trying to collect page data - so not sure if it is something in my setup or if the people who wrote the original repo ran into similar issues.

I am unable to run a build locally and also Vercel has the error too.

I posted the issue originally here: https://github.com/vercel/vercel/discussions/9006

## Error creating a build

```
npm run build
```

Output

```
> swejobs-next-firebase@0.1.0 build
> next build

info  - Loaded env from /mnt/volume_nyc1_01/swejobs-next-firebase/.env
info  - Linting and checking validity of types
info  - Creating an optimized production build
info  - Compiled successfully
info  - Collecting page data .SyntaxError: Unexpected token u in JSON at position 0
    at JSON.parse (<anonymous>)
    at /mnt/volume_nyc1_01/swejobs-next-firebase/.next/server/chunks/186.js:961:27

> Build error occurred
Error: Failed to collect page data for /about/about-data
    at /mnt/volume_nyc1_01/swejobs-next-firebase/node_modules/next/dist/build/utils.js:959:15
    at processTicksAndRejections (node:internal/process/task_queues:96:5) {
  type: 'Error'
}
info  - Collecting page data .
```

## Error when Vercel tries to do a build

```
info  - Linting and checking validity of types...
info  - Creating an optimized production build...
info  - Compiled successfully
info  - Collecting page data...
SyntaxError: Unexpected token u in JSON at position 0
    at JSON.parse (<anonymous>)
    at /vercel/path0/.next/server/chunks/186.js:961:27
> Build error occurred
Error: Failed to collect page data for /about/about-data
    at /vercel/path0/node_modules/next/dist/build/utils.js:959:15 {
  type: 'Error'
}
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
Error: Command "yarn run build" exited with 1
```

## Versions

```
node --version
v16.14.2

npm --version
9.1.1

vercel --version
Vercel CLI 28.5.6
```
