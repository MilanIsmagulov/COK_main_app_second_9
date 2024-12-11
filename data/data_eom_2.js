window.dataLoaded = false;
let title_of_eom = themeOfDEC;
const data = {
    "index_1":{
        "subtitle": "Изучите классификацию технической документации.",
        "step_of_popup": "Изучите классификацию технической документации.",
        "paragraph_1":[
            {"text2": `
            <style>
                *{
                    font-family: 'Montserrat', sans-serif;
                    font-size: clamp(16px, 1.8vw, 25px);
                }
                .subtitle_wrapper{
                    margin-bottom: 0px;
                }
                main{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    margin-top: -10px;
                }
                .one_nine_page_custom{
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    background-color: #c6bfb9;
                    border-radius: 30px;
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    width: clamp(300px, 80%, 2200px);
                    height: 120%;
                    padding-bottom: 5vw;
                    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
                    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
                    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
                }
                .one_nine_page_list_wrapper_custom{
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;            
                    background-color: #fff;
                    flex-direction: column;
                    margin-top: 50px;
                    height: 80%;
                    width: 90%;
                    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
                    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
                    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
                    transform: rotate(-0.25deg);
                }
                .one_nine_page_pr_custom{
                    position: absolute;
                    top: 0;
                    background-image: url('./content/9_1_1_pr.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    z-index: 2;           
                    height: clamp(70px, 10vw, 155px);
                    width: 60%;
                }
                .one_nine_page_list_element_custom{
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;
                    margin: 5px;
                    width: 95%;
                    background-color: #fff;
                    transform: rotate(-0.5deg);
                    top: 150px;
                    padding: 15px;
                    padding-bottom: 3vw;
                    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
                    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
                    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
                }
                .one_nine_page_list_element_custom:first-child{
                    margin-top: 4vw;
                }
                .one_nine_page_list_element_custom:nth-child(2){
                    margin-top: -4vw;
                    width: 96%;
                }
                .one_nine_page_list_element_custom:nth-child(3){
                    margin-top: -4vw;
                    width: 95%;
                }
                .one_nine_page_list_element_custom:nth-child(4){
                    margin-top: -4vw;
                    width: 98%;
                }
                .one_nine_page_list_element_custom:nth-child(5){
                    margin-top: -4vw;
                    width: 94%;
                }
                .one_nine_page_list_element_custom:nth-child(6){
                    margin-top: -4vw;
                    width: 97%;
                }
                .one_nine_page_list_element_custom:nth-child(7){
                    margin-top: -4vw;
                    width: 95%;
                }
                .one_nine_page_list_element_custom:nth-child(8){
                    margin-top: -4vw;
                    width: 98%;
                }
                .one_nine_list_marker_custom {
                    transform: rotate(0.5deg);
                    margin: 15px;
                }
                .one_nine_list_marker_text_custom {
                    font-size: clamp(14px, 1.8vw, 23px);
                    padding: 15px;
                    transform: rotate(0.5deg);
                }
                .one_nine_list_marker_text_header_custom {
                    font-size: clamp(16px, 1.8vw, 28px);
                    color: #44546a;
                    font-weight: 800;
                    margin: auto;
                }
                .one_nine_blue_table_custom_wrapper {
                    margin: 2vw;
                    padding: 1vw;
                    border: 2px solid #0070c0;
                }
                .one_nine_blue_header_custom {
                    display: flex;
                    align-items: flex-start;
                }
                .one_nine_blue_header_rect_custom {
                    background-color: #0070c0;
                    margin-left: -1vw;
                    margin-top: -1vw;
                    max-width: 350px;
                    padding: 1vw;
                    color: #fff;
                    font-weight: 700;
                }
                .one_nine_blue_header_text_with_img_custom {
                    display: flex;
                    align-items: center;
                    padding: 1vw;
                    margin-top: -1vw;
                }
                .one_nine_blue_header_text_with_img_custom img{
                    height: 80px;
                    margin-right: 15px;
                }
                .one_nine_blue_table_text_custom p{
                    margin: 5px;
                }
                .one_nine_blue_table_text_custom p b{
                    color: #0070c0;
                }
                @media(max-width: 1300px){
                    .one_nine_page_custom{
                        width: clamp(300px, 80%, 1000px);
                    }
                    .one_nine_page_pr_custom{      
                        height: clamp(70px, 10vw, 115px);
                        width: 70%;
                    }
                }
                @media(max-width: 650px){
                    .one_nine_page_custom{
                        width: clamp(200px, 100%, 1000px);
                    }
                    .one_nine_page_pr_custom{
                        width: 80%;
                    }
                    .one_nine_list_marker_custom img{
                        width: 50px;
                    }
                    .one_nine_blue_header_custom{
                        flex-direction: column;
                    }
                    .one_nine_blue_header_rect_custom{
                        max-width: initial;
                        width: 100%;
                        margin-bottom: 25px;
                    }
                }
                @media(max-width: 450px){
                    .one_nine_list_marker_custom img{
                        width: 25px;
                    }
                }
                @media(max-width: 350px){
                    .one_nine_list_marker_custom img{
                        width: 0px;
                        margin: 0px;
                    }
                    .one_nine_list_marker_custom{
                        margin: 0px;
                    }
                }
            </style>
    <main>
        <p>Техническая документация представляет собой совокупность документов, которые сопровождают разработку, внедрение и эксплуатацию любых технических систем и продуктов. Она подразделяется на несколько основных типов.</p>
        <div class="one_nine_page_custom">
            <div class="one_nine_page_pr_custom">
                
            </div>
            <div class="one_nine_page_list_wrapper_custom">
                <div class="one_nine_page_list_element_custom">
                    <div class="one_nine_list_marker_custom">
                        <img src="./content/9_1_1_pr_list.png" alt="1">
                    </div>
                    <div class="one_nine_list_marker_text_custom">
                        <b class="one_nine_list_marker_text_header_custom">Проектная документация</b>
                        <p>содержит информацию, необходимую для разработки, создания и сборки систем. Включает чертежи, схемы, спецификации и другие документы.</p>
                    </div>
                </div>
                <div class="one_nine_page_list_element_custom">
                    <div class="one_nine_list_marker_custom">
                        <img src="./content/9_1_1_pr_list.png" alt="1">
                    </div>
                    <div class="one_nine_list_marker_text_custom">
                        <b class="one_nine_list_marker_text_header_custom">Эксплуатационная документация</b>
                        <p>регламентирует процесс эксплуатации системы. Описывает, как использовать продукт, его техническое обслуживание, а также правила безопасности при его эксплуатации.</p>
                    </div>
                </div>
                <div class="one_nine_page_list_element_custom">
                    <div class="one_nine_list_marker_custom">
                        <img src="./content/9_1_1_pr_list.png" alt="1">
                    </div>
                    <div class="one_nine_list_marker_text_custom">
                        <b class="one_nine_list_marker_text_header_custom">Методическая документация</b>
                        <p>разрабатывается для методического сопровождения системы или продукта. Включает рекомендации по обучению персонала, инструкции по применению и методики тестирования.</p>
                    </div>
                </div>
                <div class="one_nine_page_list_element_custom">
                    <div class="one_nine_list_marker_custom">
                        <img src="./content/9_1_1_pr_list.png" alt="1">
                    </div>
                    <div class="one_nine_list_marker_text_custom">
                        <b class="one_nine_list_marker_text_header_custom">Научно-техническая документация</b>
                        <p>документирует процессы и исследования, связанные с инновациями и новыми технологиями, а также аналитические отчеты, включающие результаты научных исследований.</p>
                    </div>
                </div>
                <div class="one_nine_page_list_element_custom">
                    <div class="one_nine_list_marker_custom">
                        <img src="./content/9_1_1_pr_list.png" alt="1">
                    </div>
                    <div class="one_nine_list_marker_text_custom">
                        <b class="one_nine_list_marker_text_header_custom">Конструкторская документация</b>
                        <p>Этот тип документации описывает конструкцию изделия и включает все необходимые чертежи, спецификации и описания компонентов, используемых в процессе его создания. Конструкторская документация разрабатывается на этапах проектирования и производства и обеспечивает точное соответствие продукта проектным решениям.</p>
                    </div>
                </div>
                <div class="one_nine_page_list_element_custom">
                    <div class="one_nine_list_marker_custom">
                        <img src="./content/9_1_1_pr_list.png" alt="1">
                    </div>
                    <div class="one_nine_list_marker_text_custom">
                        <b class="one_nine_list_marker_text_header_custom">Технологическая документация</b>
                        <p>Содержит детализированные инструкции по изготовлению, сборке и тестированию изделия или системы. Включает технологические карты, инструкции по обработке материалов, перечень оборудования и инструментов, необходимых для выполнения операций. Этот тип документации важен для обеспечения качества производства и снижения количества ошибок.</p>
                    </div>
                </div>
                <div class="one_nine_page_list_element_custom">
                    <div class="one_nine_list_marker_custom">
                        <img src="./content/9_1_1_pr_list.png" alt="1">
                    </div>
                    <div class="one_nine_list_marker_text_custom">
                        <b class="one_nine_list_marker_text_header_custom">Ремонтная документация</b>
                        <p>Документы этого типа содержат инструкции по диагностике, ремонту и восстановлению работоспособности изделия. Включает схемы разборки, перечни запасных частей, методы устранения неисправностей и последовательность ремонта. Ремонтная документация особенно важна для длительного использования сложных технических систем.</p>
                    </div>
                </div>
                <div class="one_nine_page_list_element_custom">
                    <div class="one_nine_list_marker_custom">
                        <img src="./content/9_1_1_pr_list.png" alt="1">
                    </div>
                    <div class="one_nine_list_marker_text_custom">
                        <b class="one_nine_list_marker_text_header_custom">Утилизационная документация</b>
                        <p>Разрабатывается для описания процесса утилизации или переработки продукта по окончании его жизненного цикла. Утилизационная документация регламентирует способы безопасного вывода из эксплуатации, переработки компонентов и обращения с опасными материалами, если они имеются.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="one_nine_blue_table_custom_wrapper">
            <div class="one_nine_blue_header_custom">
                <div class="one_nine_blue_header_rect_custom">Пример применения классификации</div>
                <div class="one_nine_blue_header_text_with_img_custom">
                    <img src="./content/9_1_1_pr_blue.png" alt="1">
                    <b>Создание сложной промышленной машины</b>
                </div>
            </div>
            <div class="one_nine_blue_table_text_custom">
                <p><b>Конструкторская документация</b> будет включать подробные чертежи и спецификации деталей.</p>
                <p><b>Технологическая документация</b> обеспечит точные инструкции по сборке и настройке машины, с указанием всех технологических операций.</p>
                <p><b>Эксплуатационная документация</b> предоставит пользователю информацию о безопасной работе и обслуживании машины.</p>
                <p><b>Ремонтная документация</b> будет содержать инструкции по диагностике и устранению возможных неисправностей.</p>
                <p><b>Утилизационная документация</b> опишет процесс безопасной утилизации машины после окончания её жизненного цикла.</p>
            </div>
        </div>
    </main>
            `},
        ],
    },
    "index_2":{
        "subtitle": "Установите соответствие между видами технической документации их предназначением.",
        "step_of_popup": "Установите соответствие между видами технической документации их предназначением.",
        "test": [{
            "type": 6
        }, {
            "image": "./content/tests_content/03_01_0002.png"
        }, {
            "answers": [['Содержит информацию, необходимую для разработки и сборки систем: чертежи, схемы, спецификации и т.д.'], ['Предоставляет алгоритмы взаимодействия с системой, ориентируясь на оптимизацию работы пользователя и минимизацию рисков при применении.'], ['Включает рекомендации по обучению персонала, инструкции по применению и методики тестирования.'], ['Описывает процессы исследований и инноваций, а также включает аналитические отчеты и результаты исследований.'], ['Включает детализированное описание компонентов и их взаимосвязей, что позволяет воплотить задумку, сохраняя возможность для коррекции на различных этапах реализации.'], ['Устанавливает последовательность действий для реализации отдельных операций в процессе производства или тестирования изделия, с учётом требований к качеству.'], ['Описывает восстановительные действия, учитывая сценарии возможных сбоев, с фокусом на максимальную экономию ресурсов и минимизацию времени простоя системы.'], ['Описывает шаги по безопасному завершению жизненного цикла системы, регулирует работу с компонентами, требующими специальной обработки или переработки.']]
        }, {
            "columns": ["Проектная документация", "Эксплуатационная документация", "Методическая документация", "Научно-техническая документация", "Эксплуатационная документация", "Конструкторская документация", "Технологическая документация", "Ремонтная документация", "Утилизационная документация"]
        }],
    },
    "index_3":{
        "subtitle": "Сопоставьте элемент конструкции скребкового кристаллизатора с его названием.",
        "step_of_popup": "Сопоставьте элемент конструкции скребкового кристаллизатора с его названием.",
        "paragraph_1":[
            {"text2": `
                    <style>
                        .subtitle_wrapper{
                            margin-bottom: 0px;
                        }
                        *{
                            font-family: 'Montserrat', sans-serif;
                            font-size: clamp(16px, 1.8vw, 25px);
                        }
                        main{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-direction: column;
                        }
                        p{
                            margin-top: 0;
                        }
                        .three_nine_wrapper_custom {
                            display: flex;
                            justify-content: space-around;
                            flex-wrap: wrap;
                        }
                        .three_nine_num_list_wrapper_custom {
                            margin: 1vw;
                            min-width: 400px;
                            width: 40%;
                            max-width: 800px;
                        }
                        .three_nine_big_num_custom {
                            font-size: 120px;
                            color: var(--border-color-three-nine-custom);
                            font-weight: 900;
                            margin-bottom: -33px;
                            margin-left: 20px;
                        }
                        .three_nine_border_wrapper_custom {
                            border: 3px solid var(--border-color-three-nine-custom);
                            padding: 25px;
                            border-radius: 40px;
                            border-top: 3px dashed var(--border-color-dashed-three-nine-custom);
                            border-right: 3px dashed var(--border-color-dashed-three-nine-custom);
                        }
                        .three_nine_text_wrapper_custom {
                            padding: 25px;
                            border-radius: 20px;
                            min-height: 300px;
                            -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
                            -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
                            box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
                        }
                        .three_nine_text_wrapper_custom b{
                            display: flex;
                            margin-bottom: 25px;
                            color: var(--border-color-three-nine-custom);
                        }
                        .three_nine_text_wrapper_custom p{
                            margin-bottom: 0;
                        }
                        .first_color{
                            --border-color-three-nine-custom: #005696;
                            --border-color-dashed-three-nine-custom: #9edad8;
                        }
                        .second_color{
                            --border-color-three-nine-custom: #3cba94;
                            --border-color-dashed-three-nine-custom: #85bbe1;
                        }
                        .third_color{
                            --border-color-three-nine-custom: #18a67e;
                            --border-color-dashed-three-nine-custom: #85d9f8;
                        }
                        .fourth_color{
                            --border-color-three-nine-custom: #0070c0;
                            --border-color-dashed-three-nine-custom: #aab1bb;
                        }
                        .one_nine_blue_table_custom_wrapper {
                            margin: 2vw;
                            padding: 1vw;
                            border: 2px solid #0070c0;
                        }
                        .one_nine_blue_header_custom {
                            display: flex;
                            align-items: flex-start;
                        }
                        .one_nine_blue_header_rect_custom {
                            background-color: #0070c0;
                            margin-left: -1vw;
                            margin-top: -1vw;
                            max-width: 350px;
                            padding: 1vw;
                            color: #fff;
                            font-weight: 700;
                        }
                        .one_nine_blue_header_text_with_img_custom {
                            display: flex;
                            align-items: center;
                            padding: 1vw;
                            margin-top: -1vw;
                        }
                        .one_nine_blue_header_text_with_img_custom img{
                            height: 80px;
                            margin-right: 15px;
                            
                        }
                        .one_nine_blue_table_text_custom p{
                            margin: 5px;
                            margin-bottom: 0;
                        }
                        .one_nine_blue_table_text_custom ul{
                            margin-top: 15px;
                            margin-bottom: 0;
                        }
                        .one_nine_blue_table_text_custom p b{
                            color: #0070c0;
                        }
                        @media(max-width: 650px){
                            .three_nine_num_list_wrapper_custom {
                                min-width: 280px;
                            }
                            .three_nine_text_wrapper_custom {
                                min-height: initial;
                            }
                            .one_nine_blue_header_rect_custom{
                                margin: -1vw;
                                max-width: initial;
                                width: 100%;
                                margin-bottom: 15px;
                            }
                            .one_nine_blue_table_custom_wrapper{
                                margin-top: 30px;
                            }
                        }
                    </style>
                    <main>
                        <p>Основные требования к документации формируются в зависимости от её типа, предназначения и области применения, но существуют общие принципы, которым должна соответствовать любая техническая документация. Эти требования обеспечивают её качество, полноту и удобство использования на всех этапах – от разработки до эксплуатации системы или продукта.</p>
                        <p>К любой технической и технологической документации предъявляются определённые требования, которые обеспечивают её пригодность для использования на практике:</p>
                        <div class="three_nine_wrapper_custom">
                            <div class="three_nine_num_list_wrapper_custom">
                                <div class="three_nine_big_num_custom first_color">1</div>
                                <div class="three_nine_border_wrapper_custom first_color">
                                    <div class="three_nine_text_wrapper_custom">
                                        <b class="first_color">Четкость</b>
                                        <p>документ должен быть изложен понятным и доступным языком, без сложных формулировок и двусмысленных выражений. Это важно для быстрого и точного понимания информации всеми участниками проекта</p>
                                    </div>
                                </div>
                            </div>
                            <div class="three_nine_num_list_wrapper_custom">
                                <div class="three_nine_big_num_custom second_color">2</div>
                                <div class="three_nine_border_wrapper_custom second_color">
                                    <div class="three_nine_text_wrapper_custom">
                                        <b class="second_color">Полнота</b>
                                        <p>вся необходимая информация должна быть отражена в документе. Отсутствие каких-либо критичных деталей может привести к ошибкам в проектировании или эксплуатации системы</p>
                                    </div>
                                </div>
                            </div>
                            <div class="three_nine_num_list_wrapper_custom">
                                <div class="three_nine_big_num_custom third_color">3</div>
                                <div class="three_nine_border_wrapper_custom third_color">
                                    <div class="three_nine_text_wrapper_custom">
                                        <b class="third_color">Однозначность</b>
                                        <p>все термины, формулировки и инструкции в документе должны интерпретироваться одинаково всеми читателями. Это исключает вероятность разночтений и неправильного понимания требований</p>
                                    </div>
                                </div>
                            </div>
                            <div class="three_nine_num_list_wrapper_custom">
                                <div class="three_nine_big_num_custom fourth_color">4</div>
                                <div class="three_nine_border_wrapper_custom fourth_color">
                                    <div class="three_nine_text_wrapper_custom">
                                        <b class="fourth_color">Доступность</b>
                                        <p>документация должна быть структурирована таким образом, чтобы читатели могли легко находить необходимую информацию. Хорошо оформленный документ включает заголовки, подзаголовки, нумерацию страниц, оглавление и ссылки на дополнительные материалы</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="one_nine_blue_table_custom_wrapper">
                            <div class="one_nine_blue_header_custom">
                                <div class="one_nine_blue_header_rect_custom">Пример применения требований</div>
                            </div>
                            <div class="one_nine_blue_table_text_custom">
                                <p>
                                    <p>При разработке программного обеспечения для управления базами данных, документация должна:</p>
                                    <ul>
                                        <li>Точно описывать API и процессы интеграции (точность и полнота).</li>
                                        <li>Быть оформленной в соответствии со стандартом ГОСТ или ISO для программистов и администраторов (стандартизация).</li>
                                        <li>Быть понятной для пользователей, у которых могут отсутствовать глубокие технические знания (доступность).</li>
                                        <li>Содержать актуальные инструкции при выпуске обновлений системы (актуальность).</li>
                                        <li>Включать разделы по инсталляции, настройке, эксплуатации и поддержке (полнота жизненного цикла).</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </main>
            `},
        ],
    },
    "index_4":{
        "subtitle": "Соотнесите требования к технической документации с соответствующим примером его применения.",
        "step_of_popup": "Соотнесите требования к технической документации с соответствующим примером его применения.",
        "test":[
            {"type": 9},
            {"image": true, "image_path": "./content/empty_img.png", "image_sgn": "blablabla"},
            {"description": " "},
            {"definitions": [
                "Четкость",
                "Полнота",
                "Однозначность",
                "Доступность",
            ]},
            {"answers": [
                "Описаны все ключевые шаги работы с продуктом",
                "Документ написан понятным для всех языком",
                "Легкость понимания для разных категорий пользователей",
                "Термины и выражения однозначно понимаются",
            ]},
            {"correct_answer_type_10": [2, 1, 4, 3]}
        ],
    },
    "index_5": {
        "subtitle": "Изучите техническое задание.",
        "step_of_popup": "Изучите техническое задание.",
        "paragraph_1":[{
            "text": `
                <b class='blue_header'>Техническое задание (ТЗ)</b> – это важнейший документ, который формализует требования заказчика к проекту и задаёт основу для последующих этапов разработки. Его точное и полное составление гарантирует, что проект будет соответствовать ожиданиям, а также помогает избежать недоразумений между заказчиком и разработчиками. ТЗ выступает не только как технический, но и как юридический документ, регламентирующий обязательства сторон.
            `},
            {"text": `
                <b class=''>Основные разделы ТЗ</b>
            `}
            ,
            {"text2": `
                    <style>
        *{
            font-family: 'Montserrat', sans-serif;
            font-size: clamp(16px, 1.8vw, 25px);
        }
        main{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 100%;
        }
        p{
            margin-top: 0;
        }
        .five_nine_blue_list_wrapper{
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 25px;
        }
        .five_nine_blue_list_wrapper b{
            text-wrap: nowrap;
            margin-right: 15px;
            color: #0070c0;
        }
        .five_nine_blue_list_central_line{
            width: 100%;
            height: 1px;
            background-color: #0070c0;
        }
        .one_nine_blue_table_custom_wrapper {
            margin-top: 2vw;
            padding: 1vw;
            border: 2px solid #0070c0;
        }
        .one_nine_blue_header_custom {
            display: flex;
            align-items: flex-start;
        }
        .one_nine_blue_header_rect_custom {
            background-color: #0070c0;
            margin-left: -1vw;
            margin-top: -1vw;
            max-width: 350px;
            padding: 1vw;
            color: #fff;
            font-weight: 700;
        }
        .one_nine_blue_header_text_with_img_custom {
            display: flex;
            align-items: center;
            padding: 1vw;
            margin-top: -1vw;
        }
        .one_nine_blue_header_text_with_img_custom img{
            height: 80px;
            margin-right: 15px;
            
        }
        .one_nine_blue_table_text_custom p{
            margin: 5px;
            margin-bottom: 0;
        }
        .one_nine_blue_table_text_custom ul{
            margin-top: 15px;
            margin-bottom: 0;
        }
        .one_nine_blue_table_text_custom p b{
            color: #0070c0;
        }
        @media(max-width: 555px){
            .five_nine_blue_list_wrapper b{
                text-wrap: wrap;
            }
            .one_nine_blue_header_rect_custom{
                margin: -1vw;
                max-width: initial;
                width: 100%;
                margin-bottom: 15px;
            }
        }
    </style>
    <main>
        <div class="five_nine_blue_list_wrapper">
            <b>ОБЩИЕ СВЕДЕНИЯ О ПРОЕКТЕ</b>
            <div class="five_nine_blue_list_central_line"> </div>
        </div>
        <p>Включает цели, задачи и ожидаемые результаты разработки системы. Описывается, какие проблемы заказчика должны быть решены и каких конечных целей необходимо достичь. В этом разделе также указываются участники проекта: заказчики, разработчики, пользователи.</p>
        <div class="five_nine_blue_list_wrapper">
            <b>ФУНКЦИОНАЛЬНЫЕ ТРЕБОВАНИЯ</b>
            <div class="five_nine_blue_list_central_line"> </div>
        </div>
        <p>Содержит детализированное описание того, что именно должна делать система. Примеры функций для системы управления заказами могут включать создание и редактирование заказов, отправку уведомлений клиентам, генерацию отчётов. Этот раздел описывает конкретные функции, которые необходимо реализовать для достижения целей проекта.</p>
        <div class="five_nine_blue_list_wrapper">
            <b>НЕФУНКЦИОНАЛЬНЫЕ ТРЕБОВАНИЯ</b>
            <div class="five_nine_blue_list_central_line"> </div>
        </div>
        <p>Это требования, касающиеся качества работы системы. В них могут описываться параметры производительности (время отклика, пропускная способность), надёжность (устойчивость к сбоям), безопасность (защита данных, контроль доступа), удобство использования (пользовательский интерфейс, навигация) и возможность масштабирования (поддержка роста нагрузки или расширения функциональности).</p>
        <div class="five_nine_blue_list_wrapper">
            <b>ОГРАНИЧЕНИЯ И ЗАВИСИМОСТИ</b>
            <div class="five_nine_blue_list_central_line"> </div>
        </div>
        <p>Здесь перечисляются все ограничения, влияющие на разработку, такие как аппаратные требования (минимальная конфигурация серверов, рабочие станции), поддерживаемые операционные системы, а также зависимости от других систем или сервисов, которые должны быть интегрированы или использованы в процессе разработки.</p>
        <div class="five_nine_blue_list_wrapper">
            <b>ЮРИДИЧЕСКИЕ АСПЕКТЫ И КОНТРОЛЬ ВЫПОЛНЕНИЯ</b>
            <div class="five_nine_blue_list_central_line"> </div>
        </div>
        <p>Так как ТЗ является юридическим документом, в нём должны быть прописаны все условия контроля за ходом выполнения работ, включая этапы приёмки, тестирования и передачи проекта заказчику. Важным пунктом является также ответственность сторон в случае несоответствия проекта требованиям ТЗ.</p>
        <div class="one_nine_blue_table_custom_wrapper">
            <div class="one_nine_blue_header_custom">
                <div class="one_nine_blue_header_rect_custom">Пример применения требований</div>
            </div>
            <div class="one_nine_blue_table_text_custom">
                <p>В проекте разработки интернет-магазина:</p>
                <p><b>Функциональные требования</b> могут включать интеграцию с платёжными системами, управление каталогом товаров, и создание интерфейса для обработки заказов.</p>
                <p><b>Нефункциональные требования</b> могут содержать обязательное требование поддержки большого числа пользователей и обеспечение безопасности данных клиентов, таких как номера банковских карт.</p>
            </div>
        </div>
    </main>
            `}
        ],
    },
    "index_6": {
        "subtitle": "Изучите конструкцию и принцип работы вакуумных фильтров.",
        "step_of_popup": "Изучите конструкцию и принцип работы вакуумных фильтров.",
        "paragraph_1":[
            {"text": `<b class='blue_header'>Фильтры</b> – это специальные аппараты, которые предназначены для отделения кристаллов твердых углеводородов из раствора депарафинизата.`},
             
            {"text": `В состав фильтра входят следующие элементы: вращающийся барабан, который обтягивается фильтровальной тканью, а так же распределительные устройства.`},
            {"text": `Охлажденный раствор подается в фильтр. Фильтрование раствора происходит из-за создания вакуума в секциях аппарата. Раствор депарафинизата, проходя через фильтровальную ткань, отфильтровывается, и на поверхности ткани остаются кристаллы парафинов. Осадок, который остается после фильтрования на ткани, промывается растворителем.`},
            {"text": `Внутри секций будет постоянно поддерживаться вакуум. Растворитель, проходя через слой твердых углеводородов, будет их промывать и, соответственно, растворять масло. Промытый осадок отдувается с использованием инертного газа.`},
        ],
        "paragraph_2":[
            {"image": true, "image_path": "./content/sixth_p_img_6_2.png", "img_sign": "Элементы конструкции схем с вакуумными фильтрами", "left_img": true},
        ],
    },
    "index_7":{
        "subtitle": "Сопоставьте по схеме элементы конструкции и их названия.",
        "step_of_popup": "Сопоставьте по схеме элементы конструкции и их названия.",
        "test": [            
            {"type": 3},
            {"image": true, "image_path": "./content/1111_111_11.png"},
            {"answers": [
                "Вакуумный фильтр",
                "Газгольдер",
                "Вакуумный приемник",
                "Вакуумный компрессор"
            ]}
        ],
    },
    "index_8":{
        "subtitle": "Сопоставьте по схеме номер трубопровода и название транспортируемой среды.",
        "step_of_popup": "Сопоставьте по схеме номер трубопровода и название транспортируемой среды.",
        "test": [            
            {"type": 3},
            {"image": true, "image_path": "./content/eighth_p_img_6_2.png"},
            {"answers": [
                "Суспензия сырья в растворителе",
                "Растворитель",
                "Раствор депарафинизированного масла",
                "Раствор промывной",
                "Раствор гача или петролатума",
                "Инертный газ",
                "Фильтрат горячей отмывки"
            ]}
        ],
    },
    "index_9":{
        "subtitle": "Изучите разновидности процесса депарафинизации экстрактной кристаллизацией.",
        "step_of_popup": "Изучите разновидности процесса депарафинизации экстрактной кристаллизацией.",
        "paragraph_1":[
            {"text": `Процессы, применяемые при производстве нефтяных масел, имеют свои особенности, которые и определяют их применение и использование растворителей.`},
            {"text": `К таким процессам относят:
            <ul>
                <li>процесс «Дилчил»;</li>
                <li>процесс «Эделеану»;</li>
                <li>процесс депарафинизации пропаном.</li>
            </ul>
            `},
        ],
        "paragraph_2":[
            {"image": true, "image_path": "./content/nineth_p_img_6_2.png", "img_sign": " ", "left_img": true},
        ],
    },
    "index_10":{
        "subtitle": "Установите соответствие между разновидностью процесса депарафинизации и его характеристиками.",
        "step_of_popup": "Установите соответствие между разновидностью процесса депарафинизации и его характеристиками.",
        "test": [{
            "type": 7
        }, {
            "anwserArr2": ['Выше скорость охлаждения', 'Небольшая кратность', 'Низкая скорость фильтрования', 'Низкий температурный градиент', 'Нет системы инертного газа', 'Высокий выход депарафинизата', 'Система обезвоживания растворителя']
        }, {
            "answersInCol": [['Выше скорость охлаждения', 'Небольшая кратность', 'Низкая скорость фильтрования'], ['Низкий температурный градиент', 'Нет системы инертного газа'], ['Высокий выход депарафинизата', 'Система обезвоживания растворителя']]
        }, {
            "columns": ['Депарафинизация пропаном', 'Процесс «Эделеану»', 'Процесс «Дилчил»']
        }],
    },
    "index_11":{
        "subtitle": "Результаты",
        "step_of_popup": "Результаты",
        "result":[]
    },
}
window.dataLoaded = true;