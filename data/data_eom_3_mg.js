let themeName = themeOfDEC;

let allQuestions = [
    {
        type: 1,
        price: 100,
        text: 'Какие из предложенных растворителей являются неполярными (выберите все правильные ответы)',
        image: false,
        answers: ['Пропан', 'Ацетон', 'Бутан', 'Метилэтилкетон', 'Легкий бензин', 'Толуол', 'Бензол'],
        correctAnswer: [0,2,4,5,6],
        answered: null
    },    
    {
        type: 1,
        text: 'Какими параметрами определяется выбор оптимальной скорости охлаждения раствора депарафинизата (выберите все правильные ответы)',
        image: false,
        answers: ['Фракционный состав', 'Природа растворителя', 'Кратность растворителя', 'Температурный режим', 'Используемое оборудование'],
        correctAnswer: [0,1,2],
        price: 150,
        answered: null,
    },
    {
        type: 1,
        price: 200,
        text: 'Как классифицируются кристаллизаторы по типу создания пересыщения (выберите все правильные ответы)',
        image: false,
        answers: ['Прямоточные', 'Емкостные', 'Циркуляционные', 'Изогидрические', 'Вакуумные', 'Испарительные'],
        correctAnswer: [3,4,5],
        answered: null
    },   
    {
        type: 0,
        price: 250,
        text: 'На рисунке представлено схематичное изображение',
        image: true,
        answers: ['скребкового кристаллизатора', 'вакуумного фильтра', 'кристаллизатора типа «труба в трубе»', 'кристаллизатора смешивания'],
        correctAnswer: [3],
        answered: null
    }, 
    {
        type: 6,
        price: 300,
        text: "Установите соответствие между типом кристаллизатора и его характеристикой",
        leftContents: [
            { type: 'text', value: 'Прямоточные кристаллизаторы' }, 
            { type: 'text', value: 'Емкостные кристаллизаторы' }, 
            { type: 'text', value: 'Циркуляционные кристаллизаторы' }, 
        ],
        rightContents: [
            { type: 'text', value: 'Аппараты, которые работают по гидродинамическому режиму' },
            { type: 'text', value: 'Аппараты, в которых происходит полное перемещение кристаллизующейся системы с помощью специальных устройств – мешалок' }, 
            { type: 'text', value: 'Аппараты, в которых и раствор, и кристаллы движутся прямотоком' }, 
        ],
        image: false,
        video: false,
        correctAnswer: [2, 1, 0],
        answered: null
    },     
    {
        type: 1,
        price: 100,
        text: 'Выберите название веществ, которые являются побочными продуктами в процессах депарафинизиции (выберите все правильные ответы)',
        image: false,
        answers: ['Дистиллятное масло', 'Остаточное масло', 'Гач', 'Депарафинизат', 'Петролатум'],
        correctAnswer: [2,4],
        answered: null
    },
    {
        type: 6,
        text: "Установите соответствие влияния скорости охлаждения раствора депарафинизата на процесс депарафинизации",
        leftContents: [
            { type: 'text', value: 'Чем выше скорость охлаждения' }, 
            { type: 'text', value: 'Чем ниже скорость охлаждения' }, 
        ],
        rightContents: [
            { type: 'text', value: 'Тем выше скорость фильтрования, больше выход депарафинизата' },
            { type: 'text', value: 'Тем ниже скорость фильтрования, ниже выход депарафинизата' }, 
        ],
        image: false,
        video: false,
        correctAnswer: [0, 1],
        price: 150,
        answered: null,
    },
    {
        type: 2,
        text: 'Вставьте пропущенные слова:',
        textDd: `В зависимости от условий образования и роста кристаллов кристаллизаторы можно разделить на следующие.\n
        ! — образование кристаллов и их рост происходит на охлаждаемой поверхности аппарата.
        ! — образование кристаллов и их рост происходит во всем объеме аппарата. 
        ! — образование и рост кристаллов может происходить и на охлаждаемой поверхности, и во всем объеме аппарата.`,


        correctAnswer: ["поверхностные", "объемные", "смешанные"], // Индексы для выпадающих списков и строки для полей ввода
        price: 200,
        answered: null,
    },
    {
        type: 0,
        price: 250,
        text: 'На рисунке представлено схематичное изображение',
        image: true,
        answers: ['вакуумного фильтра', 'скребкового кристаллизатора', 'кристаллизатора типа «труба в трубе»', 'кристаллизатора смешивания'],
        correctAnswer: [1],
        answered: null
    },
    {
        type: 5,
        price: 300,
        text: 'Определите названия блоков установки депарафинизации на предложенной схеме',
        image: true,
        answers: ["Блок регенерации растворителя из раствора депарафинизированного масла", "Вакуумные фильтры", "Регенеративные кристаллизаторы", "Блок регенерации растворителя из раствора гача/петролатума"],
        correctAnswer: [2, 0, 1, 3],
        answered: null,
    },
    {
        type: 1,
        price: 100,
        text: 'Какие параметры относятся к основным в процессе депарафинизации (выберите все правильные ответы)',
        image: false,
        answers: ['Качество сырья', 'Скорость охлаждения раствора сырья', 'Температурный режим процесса', 'Порционная подача сырья', 'Температура конечного охлаждения', 'Давление в экстракторе'],
        correctAnswer: [0,1,3,4],
        answered: null
    },
    {
        type: 6,
        text: "Установите соответствие между качеством сырья и влиянием его на параметры процесса",
        leftContents: [
            { type: 'text', value: 'Чем выше вязкость и температура кипения' }, 
            { type: 'text', value: 'Чем выше содержание кристаллизующихся компонентов и вязкость' }, 
            { type: 'text', value: 'Чем уже фракционный состав сырья' }
        ],
        rightContents: [
            { type: 'text', value: 'Выше выход депарафинизата; ниже содержание масла в гаче; выше скорость фильтрации' },
            { type: 'text', value: 'Выше кратность растворителя' }, 
            { type: 'text', value: 'Тем ниже полнота выделения твердых парафинов; ниже скорость фильтрации, выше температура застывания депарафинизата' },
        ],
        image: false,
        video: false,
        correctAnswer: [2, 1, 0],
        price: 150,
        answered: null,
    },
    {
        type: 1,
        text: 'При каких условиях увеличится выход целевого продукта установок депарафинизации (выберите все правильные ответы)',
        image: false,
        answers: ['Высокая скорость фильтрования', 'Высокое образование мелких кристаллов', 'Низкая скорость фильтрования', 'Высокая скорость охлаждения раствора'],
        correctAnswer: [0,3],
        price: 200,
        answered: null,
    },
    {
        type: 1,
        text: 'Выберите разновидности процессов депарафинизации (выберите все правильные ответы)',
        image: false,
        answers: ['Депарафинизация пропаном', 'Процесс «Эделеану»', 'Процесс «Дилчил»', 'Кислотная очистка', 'Контактная очистка'],
        correctAnswer: [0,1,2],
        price: 250,
        answered: null,
    },
    {
        type: 5,
        price: 300,
        text: 'Установите соответствие между номером потока на предложенной схеме и названием вещества',
        image: true,
        answers: ['Хладогент', 'Гач или петролатум', 'Раствор гача или петролатума', 'Депарафинизированное масло', 'Сырье', 'Растворитель', 'Раствор депарафинизированного масла'],
        correctAnswer: [4, 5, 6, 3, 0, 2, 1],
        answered: null, // Флаг, ответили ли на этот вопрос
    },        
];