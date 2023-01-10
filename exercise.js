/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

import React from "react"
import ReactDOM from "react-dom/client"

function MyPage() {
    return(
        <div>
        <h1>Reasons why I am excited to learn ReactJS: </h1>
            <ol>
                <li>It can make me employable</li>
                <li>It is easier to learn</li>
                <li>It is regulary maintained</li>
            </ol>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<MyPage />)
