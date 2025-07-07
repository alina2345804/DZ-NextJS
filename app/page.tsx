'use client'
import {Card, Button} from "@/components";

export default function Home() {
  return (
    <>
     <Card
               category="Front-end"
               point="·"
               date="1 месяц назад"
               title="Как работать с CSS Grid"
               description="Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."
               readTime="3 минуты"
               likeCount={4}
               isLiked={false}
           />
        <>
            <Button isActive={false} />
        </>
    </>
  )
}