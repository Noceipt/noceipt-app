import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
console.log(generateComponent(args[0]) + '\n');

export function generateComponent(name) {
    const componentFolderPath = path.join('components', name);
    const tsxFile = name + '.tsx';
    const indexFile = 'index.ts';
    const scssFile = name + '.module.scss';
    const tsxFileContent = `//import styles from './${scssFile}';
import { ReactNode } from 'react';

interface I${name}Props {
    classname?: string;
    children?: ReactNode;
}
const ${name} = ({
    classname = '',
    children,
}: I${name}Props) => {
    return (<p>${name}</p>);
};
export default ${name};`;
    const scssFileContent = ``;
    const indexFileContent = `export {default} from './${name}';`;

    console.log(chalk.greenBright('Generating component files...'));

    try {
        fs.mkdirSync(componentFolderPath);
        fs.writeFileSync(
            path.join(componentFolderPath, tsxFile),
            tsxFileContent
        );
        fs.writeFileSync(
            path.join(componentFolderPath, indexFile),
            indexFileContent
        );
        fs.writeFileSync(
            path.join(componentFolderPath, scssFile),
            scssFileContent
        );
    } catch (err) {
        console.log(chalk.redBright('\nError durring file creation...'));
        console.log(chalk.redBright(err));
        process.exit(1);
    }

    return [
        chalk.greenBright('|-- components'),
        chalk.greenBright('|   |-- ' + name),
        chalk.greenBright('|   |   |-- ' + indexFile),
        chalk.greenBright('|   |   |-- ' + scssFile),
        chalk.greenBright('|   |   |-- ' + tsxFile),
    ].join('\n');
}