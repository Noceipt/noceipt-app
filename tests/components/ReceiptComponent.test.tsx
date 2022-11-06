import { render } from "@testing-library/react";
import ReceiptComponent from "../../components/ReceiptComponent"
describe('ReceiptComponent component', () => {
    it('should render default', () => {
        const { container } = render(<ReceiptComponent />);
        expect(container.childElementCount).toEqual(1);
    });
});