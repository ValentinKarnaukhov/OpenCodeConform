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
    },
    {
        title: 'Focus on What Matters',
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
                ahead and move your docs into the <code>docs</code> directory.
            </>
        ),
    },
    {
        title: 'Powered by React',
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--5', styles.featureItem)}>
            <div className="text--center">
                {/*<Svg className={styles.featureSvg} role="img" />*/}
            </div>
            <div className="text--center">
                <Heading as="h3">{title}</Heading>
            </div>
            <div className="left padding-horiz--md">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
