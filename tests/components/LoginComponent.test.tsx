import { render } from "@testing-library/react";
import LoginComponent from "../../components/LoginComponent"
describe('LoginComponent component', () => {
    it('should render default', () => {
        const { container } = render(<LoginComponent />);
        expect(container.childElementCount).toEqual(1);
    });
});