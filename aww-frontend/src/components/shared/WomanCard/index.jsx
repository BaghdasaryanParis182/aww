import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PageConstants from '../../../const'
import styles from './womanCard.module.css'

const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL
const WomanCard = ({
  id,
  img,
  name,
  address,
  className,
  profession,
  avatarSize,
  lifeDuration,
  imageWidth,
}) => (
  <div className={`max-w-xs ${className} ${styles.womanCard}`}>
    <Link href={`/women/${id}`}>
      <a>
        <div>
          <Image
            alt={`${name}`}
            src={`${baseUrl}${img}`}
            width={imageWidth ?? 334}
            height={PageConstants.imgSizes[avatarSize]}
            layout="fixed"
            objectFit={'cover'}
            objectPosition="top"
          />
          <div className="mt-3 pl-4">
            <h4 className="text-violet-950 text-lg font-semibold">{name}</h4>
            <div className="truncate-lines-4 overflow-hidden mt-2 divide-y-2 divide-yellow-450 ">
              <p className="text-base text-blue-950">{address}</p>
              <hr className={'mt-3 w-58'} />
            </div>
            <div className="mt-3">
              <p className={'text-lg  font-semibold text-violet-950'}>
                {lifeDuration}
              </p>
              <p className="text-xs text-base text-blue-950 mt-2">
                {profession}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  </div>
)

export default WomanCard
