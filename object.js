"use strict"

//№1
// class AuthSystem {
//     constructor(maxAttempts = 3, blockTime = 10000) {
//         this.users = {};
//         this.maxAttempts = maxAttempts;
//         this.blockTime = blockTime;
//     }

//     addUser(login, password) {
//         this.users[login] = {
//             password,
//             failedAttempts: 0,
//             blockedUntil: 0
//         };
//     }

//     login(login, password) {
//         const user = this.users[login];

//         if (!user) {
//             console.log("Користувача не знайдено");
//             return;
//         }

//         if (Date.now() < user.blockedUntil) {
//             console.log("Акаунт тимчасово заблокований");
//             return;
//         }

//         if (user.password === password) {
//             user.failedAttempts = 0;
//             console.log("Успішний вхід");
//         } else {
//             user.failedAttempts++;

//             console.log(
//                 `Невірний пароль. Спроба ${user.failedAttempts}`
//             );

//             if (user.failedAttempts >= this.maxAttempts) {
//                 user.blockedUntil = Date.now() + this.blockTime;
//                 user.failedAttempts = 0;

//                 console.log(
//                     `Акаунт заблокований на ${this.blockTime / 1000} секунд`
//                 );
//             }
//         }
//     }
// }

// const auth = new AuthSystem();

// auth.addUser("admin", "1234");

// auth.login("admin", "1111");
// auth.login("admin", "2222");
// auth.login("admin", "3333");
// auth.login("admin", "1234");

//№2
// class Subscription {
//     constructor() {
//         this.subscribers = [];
//     }

//     subscribe(user) {
//         this.subscribers.push(user);
//         console.log(`${user} підписався`);
//     }

//     unsubscribe(user) {
//         this.subscribers =
//             this.subscribers.filter(x => x !== user);

//         console.log(`${user} відписався`);
//     }

//     notify(message) {
//         this.subscribers.forEach(user => {
//             console.log(`${user} отримав: ${message}`);
//         });
//     }
// }

// const service = new Subscription();

// service.subscribe("Artem");
// service.subscribe("Ivan");

// service.notify("Нова новина!");

// service.unsubscribe("Ivan");

// service.notify("Нове повідомлення!");

//№3
// class TaskManager {
//     constructor() {
//         this.tasks = [];
//         this.nextId = 1;
//     }

//     createTask(title) {
//         this.tasks.push({
//             id: this.nextId++,
//             title,
//             completed: false
//         });
//     }

//     deleteTask(id) {
//         this.tasks =
//             this.tasks.filter(task => task.id !== id);
//     }

//     changeStatus(id) {
//         const task =
//             this.tasks.find(task => task.id === id);

//         if (task) {
//             task.completed = !task.completed;
//         }
//     }

//     showTasks() {
//         console.table(this.tasks);
//     }

//     search(title) {
//         return this.tasks.filter(task =>
//             task.title
//                 .toLowerCase()
//                 .includes(title.toLowerCase())
//         );
//     }
// }

// const manager = new TaskManager();

// manager.createTask("Вивчити JavaScript");
// manager.createTask("Зробити лабораторну");

// manager.changeStatus(1);

// manager.showTasks();

// console.log(manager.search("java"));

// manager.deleteTask(2);

// manager.showTasks();

//№4
class PromoCodeService {
    constructor() {
        this.promocodes = {};
    }

    addPromo(code, limit) {
        this.promocodes[code] = {
            usesLeft: limit
        };
    }

    usePromo(code) {
        const promo = this.promocodes[code];

        if (!promo) {
            console.log("Промокод не знайдено");
            return;
        }

        if (promo.usesLeft <= 0) {
            console.log("Промокод недійсний");
            return;
        }

        promo.usesLeft--;

        console.log(
            `Промокод використано. Залишилось: ${promo.usesLeft}`
        );
    }
}

const promoService = new PromoCodeService();

promoService.addPromo("SALE50", 3);

promoService.usePromo("SALE50");
promoService.usePromo("SALE50");
promoService.usePromo("SALE50");
promoService.usePromo("SALE50");