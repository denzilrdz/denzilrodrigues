import { FC } from 'react';
import Styles from './index.module.scss';

const Batches: FC = () => {
  const credlyBaseUrl = 'https://www.credly.com';
  const batches = [
    {
      id: 'fab9976f-bda3-4d48-9522-9b7865ec530e',
      name: 'AWS Cloud Quest: Cloud Practitioner',
      image_url:
        'https://images.credly.com/images/2784d0d8-327c-406f-971e-9f0e15097003/image.png',
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
