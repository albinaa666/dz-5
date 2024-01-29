var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
var tagCounts={}
for (var tag of tags) {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1
}
tags.sort((a, b) => {
    if (tagCounts[b] === tagCounts[a]) {
        return a < b?-1:a>b?1:0}
    })
console.log(tagCounts)
function formatName(surname, firstName, patronymic) {
    const abbreviatedPatronymic = patronymic.charAt(0).toUpperCase() + "."
    return `${surname} ${firstName.charAt(0)}.${abbreviatedPatronymic}`}
    console.log(formatName("Бекова", "Айдана", "Бековна"))
{


}

let books = [
    {title: 'Анна Каренина', author: 'Лев Толстой'},
    {title: 'Война и мир', author: 'Лев Толстой'},
    {title: 'Преступление и наказание', author: 'Фёдор Достоевский'},
    {title: '1984', author: 'Джордж Оруэлл'},
    {title: 'Улисс', author: 'Джеймс Джойс'},
    {title: 'Гарри Поттер и философский камень', author: 'Джоан Роулинг'}
]

let booksY = books.filter(book => book.title.includes('у') || book.title.includes('У'));
console.log(booksY);

const usersArray = [
    { name: "Иван", birthDate: "1990-05-15" },
    { name: "Мария", birthDate: "1985-12-20" },
    { name: "Алексей", birthDate: "1993-08-02" },
    { name: "Елена", birthDate: "1978-03-10" },
    { name: "Дмитрий", birthDate: "1987-06-25" }
];

usersArray.forEach(user => {
    console.log(`Пользователь ${user.name} родился ${user.birthDate}`)
})