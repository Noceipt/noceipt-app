import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
console.log(generateTest(args[0]) + '\n');

export function generateTest(name) {
    const testFolderPath = path.join('tests', 'components');
    const testFile = name + '.test.tsx';
    const testFileContent = `import { render } from "@testing-library/react";
import ${name} from "../../components/${name}"
describe('${name} component', () => {
    it('should render default', () => {
        const { container } = render(<${name} />);
        expect(container.childElementCount).toEqual(1);
    });
});`;

    console.log(chalk.greenBright('Generating test file...'));

    try {
        fs.writeFileSync(
            path.join(testFolderPath, testFile),
            testFileContent
        );
    } catch (err) {
        console.log(chalk.redBright('\nError durring file creation...'));
        console.log(chalk.redBright(err));
        process.exit(1);
    }

    return [
        chalk.greenBright('|-- tests'),
        chalk.greenBright('|   |-- components'),
        chalk.greenBright('|   |   |-- ' + testFile),
    ].join('\n');
}