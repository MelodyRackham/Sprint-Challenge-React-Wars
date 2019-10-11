# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

A) React JS is a Javascript framework used for UI Design. One problem that it tries to solve is that if a page has data that changes over time at high rates, there is a requirement for DOM updates to be very fast and also reflect in other parts of the UI if they use the same data.. but with a virtual DOM (from ReactJS) the page doesn’t even have to reload.

1. What does it mean to think in react?

A) To think in react to me means to think in terms of COMPONENTS. Being able to break down an application in components.

1. Describe state.

A) State very simply put is an object that determines how that component renders & behaves.

1. Describe props.

A) Most components can be customized when they are created, with different parameters. These creation parameters are called props , short for properties.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A) A side effect is anything that affects something outside the scope of the function being executed. To sync effects in a React component to state or prop changes, we use the Effect HOOK. {useEffect}
