- html binding instead of pure refactorable js
- actions names and getter names as strings instead of pure functions
- multiple incopatible ways to dispatch actions/mutations (action creators are needed)
- undocumented behavior mapMutations/mapActions (we can also pass a function)
- intercepting mutations from other features possible
- namespaces creates more problems than it solves
   - unique names for getter
   - actions and mutations can be solved by unique TYPES but not getters
   - creating dispatchable mutations/actions in plugins
   - nice module composition + grouping all state utils at framework level
- vuex
  - controlled mutations vs immutability
  - no way to intercept actions at all (even though they have action types)
  - mutation can be intercepted only after they have happened
  - no way to intercept mutation before it happens
  - no way to suppress mutation from commiting
  - no way to suppress action from dispatching
  - it is possible to reuse getter inside actions
  - it is possible to compose getters natively
  - it is possible to watch to state changes


Best practices: https://github.com/pablohpsilva/vuejs-component-style-guide#harness-your-component-props
Question about intercepting actions: https://github.com/vuejs/vuex/issues/670
