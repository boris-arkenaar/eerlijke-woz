# Eerlijke WOZ example app

## Run the project

```
yarn
yarn dev
```

or

```
npm install
npm run dev
```

## Stack

Built with TypeScript, React and Next.js. Using Tailwind for quickly styling the application. I didn't make use of any component library since Eerlijke-WOZ itself doesn't do that and this keeps the code footprint small and flexible. Only other dependency that hasn't been mentioned yet is usehooks-ts which includes some useful react hooks of which the useDebounce hook is being used so far in this project.

## Future improvements

Possible improvements which I would love to do, but didn't have time for in the scope of this exercise are listed below.

- Use Emotion.js in combination with Tailwind for better readability.
- Add support for svg images.
- Make the steps component more generic and flexible, with visible state.
- Make the design compatible with mobile devices.
- Make the address suggestion dropdown usable with keyboard.
- Improve the accessability of the whole app.
- Extract styled elements, that appear more than once, into their own component.
- Finish styling of the savings and no-savings component.
- Finish styling and functionality of the business step modal.
- Implement loading and error states.
