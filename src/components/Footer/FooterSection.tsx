import { pageTexts } from '@/utils/constants'
import React from 'react'

export default function FooterSection() {
  return (
    <>
    <h1 className="text-4xl w-full mb-8 font-medium md:pb-16 text-white md:border-b-2">
          tickete
        </h1>
        <div className="flex w-full flex-col-reverse justify-between md:flex-row">
          <ul>
            {pageTexts.footerSection.links.map((item, index) => (
              <a
                href={item.url}
                key={item.url}
                className="text-white mb-5"
              >
                {index<pageTexts.footerSection.links.length-1 ? item.title : "Cancel"}
                {index<pageTexts.footerSection.links.length-1 && " • "}
              </a>
            ))}
          </ul>
          <div className="flex gap-x-5 justify-start">
            {pageTexts.footerSection.socialLinks.map((item, index) => (
              <a
                href={item.url}
                key={item.url}
                className="text-white text-xl font-medium mb-5"
              >
                {item.svg}
              </a>
            ))}
          </div>
        </div></>
  )
}
