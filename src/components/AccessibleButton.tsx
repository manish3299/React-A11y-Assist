import withA11y from '../hocs/withA11y';

const AccessibleButton = withA11y((props: any) => <button {...props}>Accessible Button</button>);

export default AccessibleButton;
