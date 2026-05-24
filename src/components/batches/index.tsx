import { FC } from 'react';
import Styles from './index.module.scss';
import cloudQuestPractitioner from '@assets/img/cloudQuestPractitioner.png';

const Batches: FC = () => {
  const credlyBaseUrl = 'https://www.credly.com';
  const batches = [
    {
      id: 'fab9976f-bda3-4d48-9522-9b7865ec530e',
      name: 'AWS Cloud Quest: Cloud Practitioner',
      image_url: cloudQuestPractitioner,
    },
  ];
  return (
    <div className={Styles.batchContainer}>
      {batches.map((batch) => (
        <div key={batch.id}>
          <a
            href={`${credlyBaseUrl}/badges/${batch.id}/public_url`}
            target='_blank'
            rel='noreferrer'
          >
            <img
              className={Styles.batchImg}
              alt={batch.name}
              src={batch.image_url}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Batches;
