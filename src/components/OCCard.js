import React from "react"
// import { Linkedin, Instagram } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import styles from "./OCCard.module.css"



export default function OCCard({ name, img, domain, InstaId, linkedinId }) {
  return (
    <div className={styles.card}>
      <div className={styles.boxshadow}></div>
      <div className={styles.main}>
        <div className={styles.top}></div>
        <div className={`${styles.side} ${styles.left}`}></div>
        <div className={`${styles.side} ${styles.right}`}></div>
        <img src={img || "/placeholder.svg"} alt={name} className={styles.profileImage} />
        <div className={styles.title}>{name}</div>
        <div className={styles.domain}>{domain}</div>
        <div className={styles["button-container"]}>
          <button className={styles.button} onClick={() => window.open(InstaId, "_blank")}>
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </button>
          <button className={styles.button} onClick={() => window.open(linkedinId, "_blank")}>
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
