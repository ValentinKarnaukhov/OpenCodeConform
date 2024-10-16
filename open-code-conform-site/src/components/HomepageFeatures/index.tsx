import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Key Features',
        description: (
            <>
                <ul>
                    <li><b>Collections of style guides</b> for various programming languages</li>
                    <li><b>Coding standards</b> and architectural guidelines</li>
                    <li><b>Best practices</b> in testing, CI/CD, and project management</li>
                    <li><b>Code examples</b> and templates for easy integration into projects</li>
                </ul>
            </>
        ),
    }
];

function Feature({title, description}: FeatureItem) {
    return (
        <div className={clsx('col col--6')}>
            <div className="text--center">
                <Heading as="h3">{title}</Heading>
            </div>
            <div className="text--left padding-left--md">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row" style={{'display': 'flex', 'justify-content': 'center'}}>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
