showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// =======================================================================================

enum Category {JavaScript, CSS, HTML, TypeScript, Angular}


type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
};

function getAllBooks(): readonly Book[]{
    const books = <const>[
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true }
    ];
    return books;
}

function logFirstAvailable(books: readonly Book[]): void{
    console.log(`Number of books: ${books.length} `);
    const title =books.find(({available}) => available)?.title;
    console.log(`First available book: ${title}`);
}

function getBookTitlesByCategory(inputCategory: Category): string[]{
    const books = getAllBooks();
    return books
        .filter(({category}) => category === inputCategory)
        .map(({title}) => title);
}

function logBookTitles(titles: Array<string>): void {
    titles.forEach(title => console.log(title));
}

function getBookAuthorByIndex(index: number): [title: string, author: string]{
    const books = getAllBooks();
    const {title, author} = books[index];
    return [title, author];
}

function calcTotalPages(): void{
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];
    const result = data.reduce((acc: bigint, obj) => {
        return acc+BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
    console.log(result);
}
function createCustomerID(name: string, id: number): string{
    return `${id}/${name}`;
};

function createCustomer(name: string, age?: number, city?: string): void{
    console.log(`Customer name ${name}`);
    if(age){
        console.log(`Customer age ${age}`);
    }
    if(city){
        console.log(`Customer city ${city}`);
    }
};


// ========================================================
// Task 02.01
// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(0));
// calcTotalPages();

// Task 03.01
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomerID;
// idGenerator = (name: string, id: number) => `${id}/${name}`;
// idGenerator = createCustomerID;

// const a = typeof createCustomerID;
// console.log(idGenerator('Boris', 20));

// Task 03.02
createCustomer('Anna');
createCustomer('Anna', 30);
createCustomer('Anna', 30, 'Kyiv');