const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
        id: 0,
        text: "Pick a vacation destination:",

        answers: [
            {
                text: "New York",
                image: "https://images.unsplash.com/photo-1543716091-a840c05249ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                alt: "photo of the empire state building during the day",
                credit: "Triston Dunn"
            },
            {
                text: "Austin",
                image: "https://images.unsplash.com/photo-1536698988377-ecd14e62f884?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80",
                alt: "Time-lapse photography car lights on bridge",
                credit: "Jeremy Doddridge"
            },
            {
                text: "Portland",
                image: "https://images.unsplash.com/photo-1582203410996-f2af25fb9776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
                alt: "high-rise buildings",
                credit: "Peter Bucks"
            },
            {
                text: "New Orleans",
                image: "https://images.unsplash.com/photo-1571893544028-06b07af6dade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
                alt: "Road with people and a house",
                credit: "Mana"
            }
        

        ]

    },
    {
        id: 1,
        text: "Pick some food:",
        answers: [
            {
                text: "Pizza",
                image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                alt: "Pepperoni Pizza",
                credit: "Fatima Akram"
            },
            {
                text: "Sandwich",
                image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
                alt: "ham sandwich on white surface",
                credit: "Mae Mu"
            },
            {
                text: "Pasta",
                image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                alt: "italianos finest",
                credit: "Clark Douglas"
            },
            {
                text: "Hamburger",
                image: "https://images.unsplash.com/photo-1624855600799-ac8e8bddd1da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                alt: "hamburger ",
                credit: "Jon Parry"
            }
        ]
    },
    {
        id: 2,
        text: "Pick a home:",
        answers: [
            {
                text: "Traditional",
                image: "https://images.unsplash.com/photo-1664792704002-9fd85f3bf275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=635&q=80",
                alt: "focus photography of building windows",
                credit: "Ruben Hanssen"
            },
            {
                text: "Modern",
                image: "https://images.unsplash.com/photo-1614595737766-4d7e1fd1406f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
                alt: "low angle view of building",
                credit: "Paul Menz"
            },
            {
                text: "house",
                image: "https://images.unsplash.com/photo-1616965893683-ff4e991c8718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                alt: "trees besides a white house",
                credit: "Olga Subach"
            },
            {
                text: "Mountains",
                //image: "https://images.unsplash.com/photo-1536698988377-ecd14e62f884?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80",
                image: "https://images.unsplash.com/photo-1623015522585-ddc7e066a821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                alt: "brown wooden cabin infront of forest",
                credit: "Julia Verea"
            }
        ]
    }
]
const answers = [
    {
        combination: ["New York", "Pizza", "Traditional"],
        text: "Blue Cheese",
        image: "https://images.unsplash.com/photo-1626957341926-98752fc2ba90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "blue Cheese"
    },
    {
        combination: ["Austin", "Pasta", "Modern"],
        text: "Cheddar",
        image: "https://images.unsplash.com/photo-1625085576040-898520ce9e0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Cheddar Cheese"
    },
    {
        combination: ["Portland", "Sandwich", "Mountains"],
        text: "feta",
        image: "https://images.unsplash.com/photo-1606735584785-1848fdcaea57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Feta Cheese"
    },
    {
        combination: ["New Orleans", "Hamburger", "House"],
        text: "Halloumi",
        image: "https://images.unsplash.com/photo-1453078977505-10c3e375c2a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        alt: "Halloumi"
    }
]




const unansweredQuestions = []
const answeredQuestions = []

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)

        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(question.id)

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))
            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p')
            const imageLink = document.createElement('a')
            imageLink.setAttribute('href', answer.credit)
            imageLink.textContent = answer.credit
            const sourceLink = document.createElement('a')
            sourceLink.textContent = 'Unsplash'
            sourceLink.setAttribute('src', 'https://www.unsplash.com')
            answerInfo.append(imageLink, ' to ', sourceLink)




            answerBlock.append(answerImage, answerTitle, answerInfo)

            answersBlock.append(answerBlock)

        })

    questionDisplay.append(answersBlock)


        
    })

//questionDisplay.append(answersBlock)
    
}
populateQuestions()

const chosenAnswers = []

const handleClick = (questionId, chosenAnswer) => {
    if(unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer)
    const itemToRemove = unansweredQuestions.indexOf(questionId)

    if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1)
    }
    console.log(chosenAnswers)
    console.log(unansweredQuestions)

    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId

    if (!unansweredQuestions.length) {
        //scroll to answer div
        showAnswer()
    }
}

//const showAnswer = () => {
    
//}

const showAnswer = () => {
    let result
    answers.forEach(answer => {
        if (
            chosenAnswers.includes(answer.combination[0]) +
            chosenAnswers.includes(answer.combination[1]) +
            chosenAnswers.includes(answer.combination[2])
        ) {
            result = answer
        } else {
            //first answer object is default
            result = answers[0]
        }
    })

    //console.log(result)

    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    const answerImage = document.createElement('img')
    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('alt', result.alt)

    answerBlock.append(answerTitle, answerImage)
    answerDisplay.append(answerBlock)
}