function generate() {
    var quotes = {
        "sylvia plath#1" : '"I think i made you up inside my head."',
        "sylvia plath#2" : '" It is so much safer not to feel,not to let the world touch me."',
        "sylvia plath#3" : '"is there no way out of mind?"',
        "sylvia plath#4" : '"the floor seemed wonderfully solid,it was comforting to know i had fallen and could fall no furter."',
        "sylvia plath#5" : '"someone,somewhere,can you understand me a little,love me a little?"',
        "sylvia plath#6" : '"I may never be happy but tonight i am content"',
        "sylvia plath#7": '"eternity bores me,i never wanted it."',
        "sylvia plath#8": '"I am afraid to be alone with my own mind."',
        "sylvia plath#9" : '"If i did not think i would be much happier."',
        "sylvia plath#9": '"I talk to god but the sky is empty."',
        "sylvia plath#10": '"the trouble was,I hated the idea of serving men in any way."'
    }
    var authors = Object.keys(quotes);

    console.log(authors);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}