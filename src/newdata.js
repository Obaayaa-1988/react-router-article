

 const articles = [
    {   

        "name": " Snow Fluffy",
        "number": 1,
        "image": "../images/image6.jpg",
        "description": "Dogs know when humans are lying to them",
        "details": "Although every dog owner thinks that their dog 'understands' them, such a sophisticated level of reasoning about the mental states of others had never been scientifically shown in dogs, senior author Ludwig Huber, the head of the Comparative Cognition unit at the Messerli Research Institute in Vienna, and lead author Lucrezia Lonardo, a doctoral student at the Messerli Research Institute, wrote in a joint email to Live Science. "
    
    },

    {  
        
        
        "name": " Winter Fluffy",
        "number": 2,
        "image": "../images/image7.jpg",
        "description": "Dogs are being trained to sniff out COVID-19 in humans",
        "details": "A new program at the University of Pennsylvania's School of Veterinary Medicine (Penn Vet) is putting noses to the grindstone for disease detection. Researchers are working with dogs to see if the canines' superior sniffers can help with early detection of COVID-19 in humans. "
    },

    {   
        
        "name": " Summer Fluffy",
        "number": 3,
        "image": "../images/image3.jpg",
        "description": "Being a Dog Lover May Be in Your Genes",
        "details": "Prior studies have shown that exposure to dogs during childhood can shape a lasting affinity for canine companionship, but researchers wondered if genetic factors might play a role as well. To find out, they examined data from more than 85,000 twins in the Swedish Twin Registry — the world's biggest twin registry — searching for genetic clues that may be linked to dog ownership in adulthood."
    },

    {   
        "name": "Autumm Fluffy",
        "number": 4,
        "image": "../images/image4.jpg",
        "description": "Are Dogs Really Smiling at Us?",
        "details": "The dog's mouth opens wide, her lips pull up at the corners, and her tongue lolls out. Most would look at this face and see an unmistakable grin. But is that really what's going on here? Do dogs use this expression in the same way as people, to convey their joy, pleasure or contentedness?"
    },

    {    
        "name": "Spring Fluffy",
        "number": 5,
        "image": "../images/image8.jpg",
        "description": "Is Your Dog Super Smart? No, LOL",
        "details": "Scientists recently examined hundreds of studies on dog intelligence and compared them to research into the minds of other smart animals. The researchers found that dogs are among the smarter carnivores, social hunters and domestic animals — but that they don't stand out from other smart animals in any of those categories."
    },

    {  
        
        "name": "Fall Fluffy",
        "number": 6,
        "image": "../images/image5.jpg",
        "description": "Why Do Dogs Scratch the Ground After They Pee?",
        "details": "If you're a dog owner, chances are, you're accustomed to having bits of grass and soil flung into your face — a phenomenon that can usually be traced to your canine's peculiar habit of scooping up chunks of earth with its paws and propelling them energetically into the air."
    },

    

]

export function getArticles() {
    return articles
}

export function getArticle(number) {
    return articles.find((article) => article.number === number )
}

