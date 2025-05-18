import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Tài liệu toàn diện',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Tổng hợp kiến thức và tài liệu luyện thi từ các trường THCS chuyên hàng đầu như Trần Đại Nghĩa, Trần Quốc Toản.
      </>
    ),
  },
  {
    title: 'Kỹ năng thực hành',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Phát triển các kỹ năng thực hành quan trọng: thuyết trình, trình bày ý kiến, làm việc nhóm, sáng tạo và tư duy logic.
      </>
    ),
  },
  {
    title: 'Lộ trình khoa học',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Lộ trình ôn tập có hệ thống từ cơ bản đến nâng cao, kèm đề thi thử và hướng dẫn giải chi tiết.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
