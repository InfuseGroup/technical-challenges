# Setup

0. Ensure you have docker installed and running
1. Run `docker-compose build`
2. Run `docker-compose run web yarn`
3. Run `docker-compose up`
4. Go to `http://localhost:3000`.
5. Complete the challenges.
6. Follow the instructions at the end.

# React rails

Docs for the react rails gem are here: https://github.com/reactjs/react-rails

The components being referenced are in the `app/javascript/components` directory, and we can pass props to the react components as a hash.

E.g. `react_component 'staticPages/Home', linkPath: challenge_1_path`

Will look for a react component in the `app/javascript/components/staticPages` directory called `Home.tsx` and will pass it one prop called `linkPath` which we can then access in the React component itself
