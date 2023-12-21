import React from "react"
import styles from "@/styles/CollectionFeatured.module.css"
import collectionFeaturedList from "@/assets/data/collection.json"
import CollectionFeaturedCard from "./CollectionFeaturedCard"
export default function CollectionFeatured() {
  return (
    <section className={styles.collectionFeatured}>
      <div className={styles.container}>
        {/* title */}
        <h2 className={styles.title}>Collection Featured NFTs</h2>
        {/*  collection featured list */}
        <div className={styles.collection__featured_list}>
          {collectionFeaturedList?.data?.map((item, index) => (
            <CollectionFeaturedCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
