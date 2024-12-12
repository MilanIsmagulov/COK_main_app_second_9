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
    "index_5":{
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
                                <p><b style='color: black;'>Функциональные требования</b> могут включать интеграцию с платёжными системами, управление каталогом товаров, и создание интерфейса для обработки заказов.</p>
                                <p><b style='color: black;'>Нефункциональные требования</b> могут содержать обязательное требование поддержки большого числа пользователей и обеспечение безопасности данных клиентов, таких как номера банковских карт.</p>
                            </div>
                        </div>
                    </main>
            `}
        ],
    },
    "index_6":{
        "subtitle": "Изучите конструкцию и принцип работы вакуумных фильтров.",
        "step_of_popup": "Изучите конструкцию и принцип работы вакуумных фильтров.",
        "test":[
            {"type": 9},
            {"image": true, "image_path": "./content/empty_img.png", "image_sgn": "blablabla"},
            {"description": " "},
            {"definitions": [
                "Название проекта:",
                "Описание проекта:",
                "Функциональное требование:",
                "Нефункциональное требование:",
                "Ограничения:"
            ]},
            {"answers": [
                "Система управления студентами",

                "Возможность регистрации студентов и преподавателей",

                "Система управления студентами предназначена для автоматизации процессов записи, учёта, управления учебными курсами и мониторинга успеваемости студентов",
                
                "Высокая производительность системы при одновременной работе большого числа пользователей",
                "Зависимость системы от интеграции с внешними базами данных и интернет-соединения",
            ]},
            {"correct_answer_type_10": [1, 3, 2, 4, 5]}
        ],
    },
    "index_7":{
        "subtitle": "Изучите стандарты оформления документации.",
        "step_of_popup": "Изучите стандарты оформления документации.",
        "paragraph_1":[{
            "text2": `
                    <style>
                        .seven_nine_shadow_blue_rect{
                            font-size: clamp(16px, 1.5vw, 25px);
                            padding: 10px;
                            margin: 25px;
                            margin-left: 0;
                            width: 40%;
                            -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 63, 110, 0.2);
                            -moz-box-shadow: 0px 5px 10px 2px rgba(0, 63, 110, 0.2);
                            box-shadow: 0px 5px 10px 2px rgba(0, 63, 110, 0.2);
                            color: #0070c0;
                            font-weight: 700;
                        }
                        .seven_nine_shadow_blue_rect p{
                            margin: 25px;
                            margin-bottom: 25px;
                        }
                    </style>
                    <main>
                        <p><b>В процессе разработки технической документации необходимо строго следовать существующим стандартам, которые регулируют форму, содержание и структуру документов.</b></p>
                        <p>Техническая документация является важной частью разработки и эксплуатации любых систем, и её оформление должно соответствовать установленным стандартам. Эти стандарты помогают обеспечить однозначность, полноту и согласованность всех документов, а также делают их пригодными для международного использования и последующей интеграции с другими системами.</p><br><br>
                        <p><b>Основные стандарты включают:</b></p>
                        <div class="seven_nine_shadow_blue_rect">
                            <p>
                                ГОСТ 19.101-77
                            </p>
                        </div>
                        <p>Стандарт, который регламентирует структуру и содержание программной документации. Этот документ описывает требования к оформлению руководств пользователя, спецификаций, технических заданий и инструкций для программного обеспечения. Стандарт акцентирует внимание на необходимости подробного описания функциональности программного продукта, а также его среды выполнения.</p>
                        <div class="seven_nine_shadow_blue_rect">
                            <p>
                                ГОСТ 34.602-89
                            </p>
                        </div>
                        <p>Стандарт, который регулирует процесс проектирования автоматизированных систем управления (АСУ). Этот документ устанавливает правила для создания проектной документации, включая требования к её разделам, таким как функциональные спецификации, схемы взаимодействия систем и описание программно-аппаратной архитектуры.</p>
                        <div class="seven_nine_shadow_blue_rect">
                            <p>
                                ГОСТ 2.105-95
                            </p>
                        </div>
                        <p>Стандарт, который регулирует общие требования к текстовым документам, применяемым в технической документации. В нём содержатся правила оформления текста, форматов страниц, нумерации разделов, ссылок на другие документы и приложений.</p>
                        <div class="seven_nine_shadow_blue_rect">
                            <p>
                                ISO/IEC 27001
                            </p>
                        </div>
                        <p>Международный стандарт, который задает требования к системе управления информационной безопасностью (СУИБ). Этот стандарт регламентирует порядок составления документов, связанных с защитой данных, описанием рисков и методов их минимизации. Включает требования к разработке политик безопасности, планов реагирования на инциденты и отчетов по оценке безопасности.</p>
                        <div class="seven_nine_shadow_blue_rect">
                            <p>
                                ISO 9001
                            </p>
                        </div>
                        <p>Стандарт, который касается системы менеджмента качества. Он определяет требования к качеству процессов, включая процессы создания и оформления документации. Этот стандарт обеспечивает постоянное улучшение всех этапов жизненного цикла документации, от её создания до обновления и архивации.</p>
                        <div class="seven_nine_shadow_blue_rect">
                            <p>
                                ГОСТ 7.32-2001
                            </p>
                        </div>
                        <p>Стандарт, определяющий правила оформления научных и технических отчетов. Включает требования к структуре отчета, порядку цитирования, оформлению графических элементов, таблиц и приложений.</p>
                        <div class="seven_nine_shadow_blue_rect">
                            <p>
                                ГОСТ 7.1-2003
                            </p>
                        </div>
                        <p>Стандарт, который регламентирует библиографическое описание документов. Применяется в тех случаях, когда в документации необходимо указывать источники или создавать списки литературы, используется в научных и технических публикациях.</p>
                        <p><b>Следование этим стандартам помогает сделать документацию более качественной, унифицированной и понятной для всех участников проекта, будь то инженеры, разработчики, тестировщики, или конечные пользователи. Стандарты также способствуют успешному прохождению сертификаций и проверок, а также упрощают последующие доработки и обновления систем и продуктов.</b></p>
                    </main>
            `
        }],
    },
    "index_8":{
        "subtitle": "Соотнесите названия стандартов с их назначением.",
        "step_of_popup": "Соотнесите названия стандартов с их назначением.",
        "test": [{
            "type": 6
        }, {
            "image": "./content/tests_content/03_01_0002.png"
        }, {
            "answers": [['Стандарт, определяющий требования к программной документации, включая руководства и спецификации'], ['Стандарт, регулирующий проектирование автоматизированных систем и структуру проектной документации'], ['Международный стандарт, задающий требования к системе управления информационной безопасностью'], ['Стандарт, касающийся оформления текстовых документов и их структурной организации в технической среде'], ['Стандарт, обеспечивающий универсальные требования к качеству процессов, включая управление документацией и её соответствие установленным критериям'], ['Стандарт, описывающий особенности оформления научных и технических отчетов'], ['Стандарт, регулирующий библиографическое описание документов, что упрощает процесс ссылки на источники']]
        }, {
            "columns": ["ГОСТ 19.101-77", "ГОСТ 34.602-89", "ISO/IEC 27001", "ГОСТ 2.105-95", "ISO 9001", "ГОСТ 7.32-2001", "ГОСТ 7.1-2003"]
        }],
    },
    "index_9":{
        "subtitle": "Ознакомьтесь со спецификацией требований.",
        "step_of_popup": "Ознакомьтесь со спецификацией требований.",
        "paragraph_1":[{
            "text" : `<style>
        :root{
            --main-blue-color-custom: #0070c0;
            --main-sea-color-custom: #3cba94;
            --main-box-shadow-custom: 1px 3px 15px 5px rgba(0,0,0,0.35);
            --main-height: 180px;
            --clip-path-border-radius: 15px;
            --pl-pr-htc-custom: 60px;
        }
        p:has(.blue_header){
            width: 100%;
        }
        body {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        body::-webkit-scrollbar {
            width: 10px;
        }
        body::-webkit-scrollbar-track {
            -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
            background-color: #f9f9fd;
        }
        #contentWrapper{
            width: 100%;
        }
        body::-webkit-scrollbar-thumb {
            background-color: #356184;
            background: linear-gradient(180deg, #00c6fb, #005bea);
        }
        ul li{
            margin-bottom: 20px;
        }
        .main_wrapper{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            height: 100% !important;
            width: 97% !important;
        }
        .wrapper_div_custom{
            display: flex;
            font-size: clamp(18px, 1.5vw, 25px);
            flex-direction: column;
            max-width: 50%;
            height: 100%;
        }
        .wrapper_div_custom h3{
            margin-bottom: 15px;
        }
        .wrapper_div_custom ul{
            margin-left: 25px;
            margin-bottom: 0.5vw;
        }
        .wrapper_div_custom ul li{
            margin-bottom: 0.5vw;
        }
        .wrapper_list_custom{
            display: flex;
            align-items: center;
            height: var(--main-height);
            width: 100%;
            margin-bottom: 2vw;
        }

        .header_text_custom span{
            font-size: clamp(45px, 12vw, 55px);
            margin-right: 25px;
        }

        .header_border_custom {
            display: flex;     /* Для задания размеров по контенту */
            margin: 10px;
        }

        .main_wrapper > div:nth-child(odd) > div > div{
            background-image: url('./content/pr_1.png');
            background-position: center;
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }

        .main_wrapper > div:nth-child(even) > div > div{
            background-image: url('./content/pr_2.png');
            background-position: center;
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }

        .text_content_custom{
            min-height: 300px;
            padding: 25px;
            padding-top: 75px;
            margin: 15px;
            border-radius: 25px;
            margin-top: -57px;
            box-shadow: var(--main-box-shadow-custom);
            background: initial;
            background-color: #fff !important;
        }

        .text_custom{
            background: initial;
            background-color: #fff !important;
        }

        .header_text_custom {
            position: relative;
            height: 120px;
            color: #fff;               /* Белый цвет текста */
            font-size: clamp(18px, 2vw, 20px);           /* Размер шрифта */
            font-weight: bold;         /* Жирный шрифт */
            display: flex;             /* Для выравнивания номера и текста */
            align-items: center;       /* Вертикальное выравнивание по центру */
            padding-left: var(--pl-pr-htc-custom);
            padding-right: var(--pl-pr-htc-custom);
            justify-content: center;
            overflow: hidden; /* Скрыть все, что выходит за пределы */
        }

        .text{
            padding: 50px;
        }

        .number_circle {
            background-color: #fff;    /* Белый круг для числа */
            color: #007bff;            /* Синий цвет для числа */
            width: 40px;               /* Ширина круга */
            height: 40px;              /* Высота круга */
            display: flex;             /* Для центрирования текста внутри круга */
            align-items: center;       /* Вертикальное центрирование */
            justify-content: center;   /* Горизонтальное центрирование */
            margin-right: 10px;        /* Отступ между кругом и текстом */
        }

        @media (max-width: 800px) {
            .wrapper_div_custom:last-child{
                margin-bottom: 15px;
            }
            .main_wrapper {
                flex-direction: column;
                flex-wrap: nowrap;
            }
            .wrapper_div_custom{
                max-width: 100%;
            }
            :root{
                --pl-pr-htc-custom: 5vw;
            }
            body {
                display: flex;
                align-items: center;
                justify-content: center;
                padding-left: 0;
                padding-right: 0;
            }
            .text_content_custom{
                margin: 0 !important;
                margin-top: -57px !important;
            }
        }
    </style>
    <div class="main_wrapper">
        <p><b>ГОСТ 2.105-95 – это стандарт, относящийся к Единой системе конструкторской документации (ЕСКД), который устанавливает правила выполнения и оформления текстовых документов. 
        </b></p>
        <p>Он применяется при создании конструкторской документации, которая содержит текстовые материалы, поясняющие конструкцию, принципы работы или другие важные аспекты разработки технических изделий.<br><br>
        <b class="blue_header">Основные положения ГОСТ 2.105-95</b>
        </p>
        <div class="wrapper_div_custom">
            <div class="header_border_custom">
                <div class="header_text_custom"><span>01</span>Требования к структуре документации</div>
            </div>
            <div class="text_content_custom">
                <p>Стандарт описывает обязательные разделы и последовательность их размещения в документах, таких как пояснительные записки, технические условия, инструкции по эксплуатации и т.д.</p>
            </div>
        </div>
        <div class="wrapper_div_custom">
            <div class="header_border_custom">
                <div class="header_text_custom"><span>02</span>Формат и оформление</div>
            </div>
            <div class="text_content_custom">
                <p>ГОСТ 2.105-95 регламентирует требования к форматам страниц, шрифтам, полям, нумерации страниц, а также способам представления графиков, таблиц, рисунков и других текстовых элементов.</p>
            </div>
        </div>
        <div class="wrapper_div_custom">
            <div class="header_border_custom">
                <div class="header_text_custom"><span>03</span>Язык и стиль документации</div>
            </div>
            <div class="text_content_custom">
                <p>Стандарт задает требования к языку, терминологии и стилю изложения информации, чтобы обеспечить её однозначное понимание всеми участниками процесса. Язык должен быть точным, технически корректным и стандартизированным.</p>
            </div>
        </div>
        <div class="wrapper_div_custom">
            <div class="header_border_custom">
                <div class="header_text_custom"><span>04</span>Правила корректировки</div>
            </div>
            <div class="text_content_custom">
                <p>В ГОСТ 2.105-95 также описаны правила для внесения изменений и исправлений в текстовые документы, что особенно важно для поддержания актуальности документации на протяжении жизненного цикла изделия.</p>
            </div>
        </div>
        <p>Этот стандарт играет важную роль в обеспечении единообразия и структурированности текстовой конструкторской документации, что помогает улучшить взаимодействие между инженерами, разработчиками и другими специалистами.</p>
        <br>
        <p><b class="blue_header">Описание оформления документов в соответствии с ГОСТ 2.105-95</b></p>
        <p>ГОСТ 2.105-95 устанавливает требования к оформлению текстовых документов в рамках Единой системы конструкторской документации (ЕСКД). Основные моменты оформления включают:</p>
        <p>
            <ol>
                <li>
                    <strong>Формат страниц:</strong>
                    <ul>
                        <li>Основной формат страниц - A4 (210 × 297 мм).</li>
                        <li>Поля страниц: левое - 20 мм, правое - 10 мм, верхнее - 20 мм, нижнее - 20 мм.</li>
                    </ul>
                </li>
                <li>
                    <strong>Шрифт и размер текста:</strong>
                    <ul>
                        <li>Используется шрифт типа «Arial» или аналогичный, с высотой 1,5 мм для основного текста.</li>
                        <li>Заголовки, подзаголовки и специальные выделения могут использоваться с размером 2 мм и выше.</li>
                    </ul>
                </li>
                <li>
                    <strong>Нумерация страниц:</strong>
                    <ul>
                        <li>Все страницы документа должны быть пронумерованы. Нумерация располагается в правом верхнем углу страницы или в центре нижнего колонтитула.</li>
                        <li>Нумерация должна начинаться с первой страницы, при этом титульный лист не нумеруется, но учитывается в общем числе страниц.</li>
                    </ul>
                </li>
                <li>
                    <strong>Структура документа:</strong>
                    <ul>
                        <li>Документы должны включать следующие основные разделы: титульный лист, оглавление (при необходимости), основное содержание (разделы и подразделы), список использованных источников (при необходимости), приложения (при наличии).</li>
                        <li>Каждый раздел и подраздел должен иметь заголовок, выделенный более крупным шрифтом или полужирным начертанием.</li>
                    </ul>
                </li>
                <li>
                    <strong>Графическое оформление:</strong>
                    <ul>
                        <li>Рисунки, таблицы и схемы должны быть оформлены в соответствии с установленными стандартами, с указанием названия, номера и ссылки на них в тексте.</li>
                        <li>Все графические элементы должны быть четкими, с хорошей видимостью, и помещаться в текст с соответствующими подписями.</li>
                    </ul>
                </li>
                <li>
                    <strong>Ссылки на источники:</strong>
                    <ul>
                        <li>Все внешние источники информации, используемые в документе, должны быть приведены в списке использованных источников в конце документа, оформленном по правилам.</li>
                    </ul>
                </li>
                <li>
                    <strong>Корректировка и исправления:</strong>
                    <ul>
                        <li>Внесение изменений в документ должно осуществляться путем его перепечатки или с помощью графического редактора. Исправления должны быть четко видны и оформлены в соответствии с правилами ГОСТ.</li>
                    </ul>
                </li>
                <li>
                    <strong>Качество печати:</strong>
                    <ul>
                        <li>Документы должны быть напечатаны на качественной бумаге с использованием чернил или тонера, чтобы обеспечить четкость и долговечность документации.</li>
                    </ul>
                </li>
            </ol>
        </p>
        <p><b>Соблюдение этих требований позволяет гарантировать, что техническая документация будет понятной, структурированной и удобной для использования всеми участниками процесса разработки и эксплуатации изделий.</b></p>

    </div>`
        }],
    },
    "index_10":{
        "subtitle": "Соотнесите требования к оформлению текстовых документов ГОСТ 2.105-95 с их описанием.",
        "step_of_popup": "Соотнесите требования к оформлению текстовых документов ГОСТ 2.105-95 с их описанием.",
        "test": [{
            "type": 6
        }, {
            "image": "./content/tests_content/03_01_0002.png"
        }, {
            "answers": [['Стандартный размер бумаги и поля'], ['Размеры текста и заголовков'], ['Расположение нумерации страниц'], ['Обязательные разделы документа'], ['Оформление схем и таблиц'], ['Оформление внешних ссылок'], ['Как вносятся изменения в документ'], ['Условия качества печати']]
        }, {
            "columns": ["Формат страниц", "Шрифт и размер текста", "Структура документа", "Графическое оформление", "Ссылки на источники", "Корректировка и исправления", "Качество печати"]
        }],
    },
    "index_11":{
        "subtitle": "Ознакомьтесь со спецификацией требований.",
        "step_of_popup": "Ознакомьтесь со спецификацией требований.",
        "paragraph_1":[{
            "text" : `
                <style>
    .eleven_nine_wrapper_header div{
        background-color: #025ea1;
        color: #fff;
        display: flex;
        align-items: center;
        width: 80%;
        padding: 25px;
        font-size: clamp(16px, 1.5vw, 30px);
        border-radius: 15px;
        margin-top: 25px;
        margin-bottom: 25px;
    }
    .eleven_nine_wrapper_header div img{
        height: 60px;
    }
    .eleven_nine_wrapper_header div strong{
        margin-left: 35px;
    }
    ul{
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .eleven_nine_wrapper_header b, .eleven_nine_wrapper_header p, li{
        font-size: clamp(16px, 1.5vw, 25px);
    }
</style>
<div class="eleven_nine_wrapper_header">
    <div><img src="./content/pr1191.png" alt="1"><strong>1. Руководство пользователя</strong></div>
    <p><b>Руководство пользователя</b> – это документ, предназначенный для помощи конечным пользователям в установке, настройке, эксплуатации и устранении неисправностей программного обеспечения или системы. Его основная цель – предоставить пошаговые инструкции и описания функций, чтобы облегчить пользователям освоение и эффективное использование продукта.</p>
</div>

<div class="eleven_nine_wrapper_header">
    <div><img src="./content/pr1192.png" alt="1"><strong>2. Задачи руководства пользователя</strong></div>
    <p><b>Основные задачи руководства пользователя включают:</b></p>
    <ul>
        <li>Обеспечение доступных и понятных инструкций для пользователей с разным уровнем технической подготовки.</li>
        <li>Снижение времени на обучение пользователей.</li>
        <li>Обеспечение правильной эксплуатации программы или системы для предотвращения ошибок и сбоев.</li>
    </ul>
</div>

<div class="eleven_nine_wrapper_header">
    <div><img src="./content/pr1193.png" alt="1"><strong>3. Структура и содержание руководства пользователя</strong></div>
    <b>3.1. Введение</b>
    <ul>
        <li><strong>Назначение продукта:</strong> Краткое описание того, для чего предназначена программа или система, её основные функции и целевая аудитория.</li>
        <li><strong>Минимальные системные требования:</strong> Введение начинается с указания системных и аппаратных требований, необходимых для работы с продуктом (операционная система, процессор, оперативная память и т.д.).</li>
    </ul>
    
    <b>3.2. Инструкция по установке</b>
    <p>Этот раздел содержит подробное пошаговое руководство по установке программного обеспечения. Описывается процесс загрузки, установка на разных операционных системах (например, Windows, macOS или Linux), настройка прав доступа и инициализация данных.</p>
    <p><strong>Типичные проблемы при установке:</strong> Здесь приводятся распространённые проблемы и способы их решения, например, ошибки несовместимости или нехватки системных ресурсов.</p>

    <b>3.3. Настройка системы</b>
    <p>В этом разделе описываются базовые шаги по настройке системы после установки. Включаются настройки интерфейса пользователя, установка подключений к базам данных, настройка прав доступа и другие параметры, которые пользователь должен изменить перед использованием продукта.</p>

    <b>3.4. Основные функции и операции</b>
    <p>Самая важная часть руководства, где описываются основные функции программы. Для каждой функции даётся пошаговая инструкция: от создания пользователя до выполнения операций, например, обработка данных, создание отчетов, управление документами и т. д. Описание функций должно сопровождаться иллюстрациями экранов или интерфейса, что помогает пользователю быстрее разобраться с функционалом.</p>

    <b>3.5. Управление данными</b>
    <p>Этот раздел охватывает работу с данными: их ввод, редактирование, удаление, поиск и фильтрация. Важно указать, как правильно организовать данные, чтобы обеспечить корректное функционирование системы. Например, порядок ввода информации в систему и её синхронизация с другими модулями программы.</p>

    <b>3.6. Пользовательские сценарии</b>
    <p>Описание типичных сценариев использования программы (use cases), которые показывают пользователю, как выполнять задачи в реальных условиях. Например, создание и редактирование документа, запуск отчёта, настройка аналитических данных и другие ключевые операции.</p>

    <b>3.7. Решение проблем и диагностика</b>
    <p>Этот раздел посвящён устранению возможных неисправностей, с которыми может столкнуться пользователь. Описываются распространённые ошибки, их причины и пути устранения. Включаются советы по диагностике системы, работе с логами и обращению за технической поддержкой.</p>

    <b>3.8. Обновление системы</b>
    <p>Информация о том, как обновлять программу: установка обновлений, исправлений и новых версий программного обеспечения. Здесь также могут приводиться инструкции по переносу данных и сохранению настроек после обновления.</p>

    <b>3.9. Интеграция с другими системами</b>
    <p>Для продуктов, которые могут взаимодействовать с другими системами, этот раздел описывает шаги по подключению и интеграции. Например, интеграция с внешними базами данных, API-интерфейсами, другими программами или сервисами.</p>

    <p><strong>Таким образом, руководство пользователя – это важнейший инструмент, позволяющий пользователям эффективно работать с системой или программой.</strong></p>
</div>
            `
        }],
    },
    "index_12":{
        "subtitle": "Установите правильный порядок расположения разделов руководства пользователя.",
        "step_of_popup": "Установите правильный порядок расположения разделов руководства пользователя.",
        "test": [{
            "type": 3
        }, {
            "image": false,
            "image_path": "./content/video/test_video.mp4"
        }, {
            "answers": ["Введение", "Инструкция по установке", "Настройка системы", "Основные функции и операции", "Управление данными", "Пользовательские сценарии", "Решение проблем и диагностика", "Обновление системы"]
        }],
    },
    "index_13":{
        "subtitle": "Соотнесите разделы руководства пользователя с их краткими описаниями.",
        "step_of_popup": "Соотнесите разделы руководства пользователя с их краткими описаниями.",
        "test":[
            {"type": 9},
            {"image": true, "image_path": "./content/empty_img.png", "image_sgn": "blablabla"},
            {"description": " "},
            {"definitions": [
                "Раздел, описывающий базовые операции программы и обеспечивающий пошаговое руководство с примерами",
                "Раздел, необходимый для начальной настройки после установки программы",
                "Раздел, содержащий информацию о требованиях к среде, где программа может работать, и объясняющий, для чего она предназначена",
                "Раздел, который предоставляет детализированную последовательность действий для запуска программы на вашем устройстве",
                "Раздел, связанный с манипуляциями с информацией внутри программы, включая корректировку и фильтрацию данных"
            ]},
            {"answers": [
                "Обзор возможностей программы, представленный с пояснительными иллюстрациями для пользователя",
                "Инструкция по запуску программного обеспечения, представленная поэтапно",
                "Краткое объяснение назначения программы и её системных требований для успешной работы",
                "Подробное руководство по первичной настройке программы для её оптимального функционирования",
                "Раздел, касающийся работы с информацией, включая её ввод, редактирование и поиск",
            ]},
            {"correct_answer_type_10": [4, 1, 2, 3, 5]}
        ],
    },
    "index_14":{
        "subtitle": "Изучите пример разработки технологической инструкции.",
        "step_of_popup": "Изучите пример разработки технологической инструкции.",
        "paragraph_1":[{
            "text2" : `
                <style>
                    .subtitle_wrapper{
                        margin-bottom: 0px;
                    }
                    .fourteen_nine_header_custom{
                        display: flex;
                        width: 100%;
                        color: #222a35;
                        margin-top: 28px;
                    }
                    .fourteen_nine_header_custom p:first-child{
                        width: 30%;
                    }
                    .fourteen_nine_header_custom p:last-child{
                        width: 70%;
                    }
                    .fourteen_nine_grey_rect_custom{
                        display: flex;
                        align-items: flex-start;
                        justify-content: start;
                        width: 97%;
                        padding: 25px;
                        color: #222a35;
                        background-color: #d6dce5;
                        margin-bottom: 15px;
                    }
                    .fourteen_nine_grey_rect_custom p:first-child{
                        color: #44546a;
                        font-weight: 700;
                    }
                    .fourteen_nine_underline_custom{
                        width: 100%;
                        border-bottom: 1px solid;
                    }
                    .fourteen_nine_grey_rect_custom img{
                        margin: 25px;
                        margin-top: 8px;
                        margin-bottom: 25px;
                        height: 3vw;
                    }
                    section p{
                        font-weight: normal !important;
                        margin: 0 !important;
                        color: #222a35 !important;
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
                        font-size: clamp(18px, 1.5vw, 25px);
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
                    @media(max-width: 845px){
                        .fourteen_nine_header_custom{
                            flex-direction: column;
                        }
                        .fourteen_nine_header_custom p:first-child{
                            width: 100%;
                        }
                        .fourteen_nine_header_custom p:last-child{
                            width: 100%;
                        }
                        .fourteen_nine_grey_rect_custom{
                            width: 87%;
                        }
                        .fourteen_nine_grey_rect_custom img{
                            width: 0;
                            margin: 5px;
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
                <p><b>Технологическая инструкция</b> – это документ, который подробно описывает процесс выполнения определенной операции, использование оборудования или выполнение технологического процесса.</p>
                <p>Она предназначена для обеспечения последовательного и качественного выполнения работ, соблюдения всех требований безопасности и правильной эксплуатации оборудования.</p>
                <p>Технологическая инструкция необходима для:</p>
                <ul>
                    <li>Стандартизации производственных процессов.</li>
                    <li>Упрощения обучения новых сотрудников.</li>
                    <li>Минимизации ошибок и отклонений в производственных операциях.</li>
                    <li>Снижения рисков аварийных ситуаций и травматизма.</li>
                </ul><br>
                <p><b>Основные особенности технологической инструкции:</b></p>
                <ul>
                    <li>Четкость и последовательность изложения информации.</li>
                    <li>Актуализация с учетом изменений в технологии и требованиях безопасности.</li>
                    <li>Наличие информации по контролю качества и охране труда.</li>
                </ul><br><br>
                <p><b class='blue_header'>Основные разделы технологической инструкции</b></p>
                <div class='fourteen_nine_wrapper_custom'>
                    <div class="fourteen_nine_header_custom">
                        <p><b>Введение</b></p>
                        <p>Описание цели документа, его значимости и области применения</p>
                    </div>
                    <div class='fourteen_nine_grey_rect_custom'>
                        <p>Пример</p>
                        <img src="./content/pr1411.png" alt="">
                        <p>Настоящая инструкция предназначена для сборки персональных компьютеров в условиях производственного цеха. Она описывает все этапы процесса сборки и требования к качеству.</p>
                    </div>
                </div>
                <div class='fourteen_nine_underline_custom'> </div>

                <div class='fourteen_nine_wrapper_custom'>
                    <div class="fourteen_nine_header_custom">
                        <p><b>Требования к оборудованию и материалам</b></p>
                        <p>Описание всех необходимых инструментов, оборудования и материалов, которые потребуются для выполнения задачи</p>
                    </div>
                    <div class='fourteen_nine_grey_rect_custom'>
                        <p>Пример</p>
                        <img src="./content/pr1411.png" alt="">
                        <p>Для сборки ПК требуются следующие материалы: материнская плата, процессор, оперативная память, блок питания, жесткий диск и корпус. В качестве инструментов используются отвертка и антистатический браслет.</p>
                    </div>
                </div>

                <div class='fourteen_nine_underline_custom'> </div>
                                <div class='fourteen_nine_wrapper_custom'>
                    <div class="fourteen_nine_header_custom">
                        <p><b>Последовательность выполнения работ</b></p>
                        <p>Подробный пошаговый порядок действий, описывающий процесс выполнения работ. Каждый шаг должен быть описан настолько подробно, чтобы работник мог легко следовать инструкции, не пропустив важные этапы</p>
                    </div>
                    <div class='fourteen_nine_grey_rect_custom'>
                        <p>Пример</p>
                        <img src="./content/pr1411.png" alt="">
                        <section> 
                            <p>Шаг 1: Установите материнскую плату в корпус, закрепите её винтами</p>
                            <p>Шаг 2: Вставьте процессор в разъем на материнской плате и закрепите охлаждение</p>
                            <p>Шаг 3: Установите оперативную память в соответствующие слоты</p>
                            <p>Шаг 4: Подключите блок питания и жесткий диск</p>
                        </section>
                    </div>
                </div>
                <div class='fourteen_nine_underline_custom'> </div>
                
                <div class='fourteen_nine_wrapper_custom'>
                    <div class="fourteen_nine_header_custom">
                        <p><b>Контроль качества</b></p>
                        <p>Описание параметров, которые необходимо проверять по завершению работы, чтобы убедиться, что задача выполнена правильно. Это могут быть визуальные осмотры, измерения или тестирование функционирования системы</p>
                    </div>
                    <div class='fourteen_nine_grey_rect_custom'>
                        <p>Пример</p>
                        <img src="./content/pr1411.png" alt="">
                        <p>После сборки ПК необходимо проверить крепление всех компонентов, правильность подключения кабелей, а также произвести тестовое включение для проверки функционирования системы.</p>
                    </div>
                </div>
                <div class='fourteen_nine_underline_custom'> </div>

                <div class='fourteen_nine_wrapper_custom'>
                    <div class="fourteen_nine_header_custom">
                        <p><b>Техника безопасности</b></p>
                        <p>Правила, которые нужно соблюдать для предотвращения травм, повреждения оборудования и возможных аварий</p>
                    </div>
                    <div class='fourteen_nine_grey_rect_custom'>
                        <p>Пример</p>
                        <img src="./content/pr1411.png" alt="">
                        <p>Работа должна выполняться в антистатическом браслете, чтобы избежать повреждения компонентов от статического электричества. Следует соблюдать осторожность при работе с блоком питания, который может представлять опасность из-за высокого напряжения.</p>
                    </div>
                </div>
                <div class='fourteen_nine_underline_custom'> </div>
                <div class="one_nine_blue_table_custom_wrapper">
                <div class="one_nine_blue_header_custom">
                    <div class="one_nine_blue_header_rect_custom">Пример</div>
                </div>
                <div class="one_nine_blue_table_text_custom">
                    <p>Технологическая инструкция для сборки персонального компьютера может включать инструкции по установке материнской платы, процессора, оперативной памяти, блоков питания и жесткого диска</p>
                </div>
            </div>
            `
        }],
    },
    "index_15":{
        "subtitle": "Соотнесите разделы инструкции с их возможным содержанием.",
        "step_of_popup": "Соотнесите разделы инструкции с их возможным содержанием.",
        "test": [{
            "type": 6
        }, {
            "image": "./content/tests_content/03_01_0002.png"
        }, {
            "answers": [['Цель проведения тестирования - убедиться в корректной работе программного обеспечения'], ['Компьютер с ОС Windows 10, установленное ПО для тестирования (например, Selenium)'], ['Установить тестовое окружение. Провести функциональные тесты программы. Сравнить результаты тестов с ожидаемыми'], ['Убедиться, что все тесты пройдены успешно'], ['Соблюдать конфиденциальность данных в процессе тестирования']]
        }, {
            "columns": ["Введение:", "Требования к среде тестирования:", "Последовательность выполнения тестов:", "Контроль качества:", "Техника безопасности при тестировании:"]
        }],
    },
    "index_16":{
        "subtitle": "Изучите создание протокола испытаний.",
        "step_of_popup": "Изучите создание протокола испытаний.",
        "paragraph_1":[{
            "text2" : `
                <style>
                    .subtitle_wrapper{
                        margin-bottom: 0px;
                    }
                    .fourteen_nine_header_custom{
                        display: flex;
                        width: 100%;
                        color: #222a35;
                        margin-top: 28px;
                    }
                    .fourteen_nine_header_custom p:first-child{
                        width: 30%;
                    }
                    .fourteen_nine_header_custom p:last-child{
                        width: 70%;
                    }
                    .fourteen_nine_grey_rect_custom{
                        display: flex;
                        align-items: flex-start;
                        justify-content: start;
                        width: 97%;
                        padding: 25px;
                        color: #222a35;
                        background-color: #d6dce5;
                        margin-bottom: 15px;
                    }
                    .fourteen_nine_grey_rect_custom p:first-child{
                        color: #44546a;
                        font-weight: 700;
                    }
                    .fourteen_nine_underline_custom{
                        width: 100%;
                        border-bottom: 1px solid;
                    }
                    .fourteen_nine_grey_rect_custom img{
                        margin: 25px;
                        margin-top: 8px;
                        margin-bottom: 25px;
                        height: 3vw;
                    }
                    section p{
                        font-weight: normal !important;
                        margin: 0 !important;
                        color: #222a35 !important;
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
                        font-size: clamp(18px, 1.5vw, 25px);
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
                    .one_nine_blue_header_custom h2{
                        margin-left: 15px;
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
                    @media(max-width: 845px){
                        .fourteen_nine_header_custom{
                            flex-direction: column;
                        }
                        .fourteen_nine_header_custom p:first-child{
                            width: 100%;
                        }
                        .fourteen_nine_header_custom p:last-child{
                            width: 100%;
                        }
                        .fourteen_nine_grey_rect_custom{
                            width: 87%;
                        }
                        .fourteen_nine_grey_rect_custom img{
                            width: 0;
                            margin: 5px;
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
                <p><b>Протокол испытаний</b> – это официальный документ, который фиксирует результаты тестирования, проверки системы или оборудования. </p>
                        <p>Он является важной частью процесса сертификации продукции, а также подтверждения её соответствия техническим условиям, требованиям стандартов и специфическим требованиям заказчика.</p>
                        <p>Протокол испытаний может применяться в различных отраслях: от разработки программного обеспечения до тестирования инженерного оборудования, а также в производстве, где критически важно удостовериться, что продукт или система соответствуют установленным стандартам безопасности и качества.</p><br>
                <p><b>Основные цели протокола испытаний:</b></p>
                <ul>
                    <li>Обеспечить достоверную и объективную информацию о результатах тестирования.</li>
                    <li>Подтвердить соответствие системы или продукции установленным требованиям.</li>
                    <li>Зафиксировать любые отклонения от нормы для последующего исправления.</li>
                    <li>Представить отчетность перед заказчиками, регуляторами или внутренними заинтересованными сторонами.</li>
                </ul><br><br>
                <p><b class='blue_header'>Основные разделы протокола испытаний</b></p>

                <div class='fourteen_nine_wrapper_custom'>
                    <div class="fourteen_nine_header_custom">
                        <p><b>Общие сведения</b></p>
                        <p>
                        <section> 
                        <p style='width: 100%;'>Этот раздел содержит вводную информацию, которая включает:</p><br>
                            <ul>
                                <li>Название и описание объекта испытания.</li>
                                <li>Дата и место проведения тестов.</li>
                                <li>Данные о тестируемом объекте, такие как серийный номер, модель или версия.</li>
                                <li>ФИО и должности ответственных лиц, проводивших испытания.</li>
                            </ul>
                        </section>
                    </div>
                    <div class='fourteen_nine_grey_rect_custom'>
                        <p>Пример</p>
                        <img src="./content/pr1411.png" alt="">
                        <p>Испытание проводилось на серверном оборудовании модели X123, серийный номер 45678, 1 октября 2024 года в лаборатории завода Y.</p>
                    </div>
                </div>
                <div class='fourteen_nine_underline_custom'> </div>

                <div class='fourteen_nine_wrapper_custom'>
                    <div class="fourteen_nine_header_custom">
                        <p><b>Описание тестов</b></p>
                        <section> 
                        <p style='width: 100%;'>В этом разделе указываются подробные данные о проведенных тестах, включая:</p><br>
                            <ul>
                                <li>Методики и стандарты, по которым проводилось испытание.</li>
                                <li>Условия проведения тестов (например, температура, влажность, нагрузка).</li>
                                <li>Описание этапов тестирования, включая последовательность выполнения и используемые инструменты.</li>
                            </ul>
                        </section>
                    </div>
                    <div class='fourteen_nine_grey_rect_custom'>
                        <p>Пример</p>
                        <img src="./content/pr1411.png" alt="">
                        <p>Тестирование проводилось в соответствии с ГОСТ 1234-2020, при температуре 25°C и влажности 60%. Оценка надежности системы выполнена при 100% нагрузке в течение 24 часов.</p>
                    </div>
                </div>

                <div class='fourteen_nine_underline_custom'> </div>
                    <div class='fourteen_nine_wrapper_custom'>
                    <div class="fourteen_nine_header_custom">
                        <p><b>Результаты</b></p>
                        <section> 
                        <p style='width: 100%;'>Раздел результатов представляет собой основную часть протокола, в которой фиксируются:</p><br>
                            <ul>
                                <li>Фактические результаты проведенных испытаний.</li>
                                <li>Соответствие результатов установленным критериям и требованиям.</li>
                                <li>Описание выявленных проблем, отклонений или неисправностей.</li>
                            </ul>
                        </section>
                    </div>
                    <div class='fourteen_nine_grey_rect_custom'>
                        <p>Пример</p>
                        <img src="./content/pr1411.png" alt="">
                        <p>Система успешно выдержала тестовые нагрузки, отклонений от технических условий не выявлено. Температура процессора составила 75°C при максимальной нагрузке, что соответствует норме.</p>
                    </div>
                </div>
                <div class='fourteen_nine_underline_custom'> </div>
                
                <div class='fourteen_nine_wrapper_custom'>
                    <div class="fourteen_nine_header_custom">
                        <p><b>Заключение</b></p>
                        <p>Заключительный раздел, в котором делается вывод о соответствии или несоответствии объекта испытаний техническим требованиям и стандартам. Здесь также могут быть даны рекомендации по устранению выявленных проблем или указаны шаги для дальнейшего улучшения системы.</p>
                    </div>
                    <div class='fourteen_nine_grey_rect_custom'>
                        <p>Пример</p>
                        <img src="./content/pr1411.png" alt="">
                        <p>Серверное оборудование модели X123 соответствует требованиям ГОСТ 1234-2020. Рекомендуется внедрить дополнительные меры для улучшения теплоотвода при длительной работе на высоких нагрузках.</p>
                    </div>
                </div>
                <div class='fourteen_nine_underline_custom'> </div>
                <div class="one_nine_blue_table_custom_wrapper">
                <div class="one_nine_blue_header_custom">
                    <div class="one_nine_blue_header_rect_custom">Пример разработки протокола испытаний</div>
                    <h2><p><b>Протокол испытаний оборудования для охлаждения серверов</b></p></h2>
                </div>
                <div class="one_nine_blue_table_text_custom">
                    <p> </p>
                </div>
                <br>
                <h2>1. Общие сведения</h2>
                <ul>
                    <li><strong>Объект испытания:</strong> Система охлаждения серверного оборудования модели X-Cooler.</li>
                    <li><strong>Дата и место проведения испытания:</strong> 12 октября 2024 года, испытательная лаборатория компании Z.</li>
                    <li><strong>Ответственные лица:</strong> Иванов И.И., инженер-технолог.</li>
                </ul>
                <br>
                <h2>2. Описание тестов</h2>
                <ul>
                    <li><strong>Методика испытания:</strong> Оценка охлаждающей способности системы в соответствии с ГОСТ 5678-2021.</li>
                    <li><strong>Условия проведения тестов:</strong> Тестирование проведено при температуре окружающей среды 30&deg;С. Система подвергалась нагрузке на уровне 90% мощности в течение 48 часов.</li>
                    <li><strong>Использованные инструменты:</strong> Температурные датчики, система мониторинга нагрузки.</li>
                </ul>
                <br>
                <h2>3. Результаты</h2>
                <ul>
                    <li>Температура охлаждаемых компонентов не превышала 55&deg;С на протяжении всего теста, что соответствует установленным требованиям.</li>
                    <li>Отклонений от норм функционирования системы не выявлено.</li>
                </ul>
                <br>
                <h2>4. Заключение</h2>
                <p>Система охлаждения серверного оборудования модели X-Cooler успешно прошла испытания и соответствует требованиям ГОСТ 5678-2021. Рекомендуется к сертификации и внедрению в производственные процессы.</p>
            </div>
            `
        }],
    },
    "index_17":{
        "subtitle": "Заполните предложенный шаблон протокола испытаний для системы управления проектами, соотнеся этапы протокола с их описанием.",
        "step_of_popup": "Заполните предложенный шаблон протокола испытаний для системы управления проектами, соотнеся этапы протокола с их описанием.",
        "test": [{
            "type": 6
        }, {
            "image": "./content/tests_content/03_01_0002.png"
        }, {
            "answers": [['Уникальный идентификатор для отслеживания конкретных тестов'], ['Общее число выполненных тестов с учётом всех результатов'], ['Программное и аппаратное обеспечение, используемое во время испытаний'], ['Последовательность действий, выполненных в ходе тестирования'], ['Уникальный номер, связывающий результаты с конкретным сценарием'], ['Наблюдаемые итоги по каждому тесту и их соответствие ожиданиям'], ['Предложения по устранению недостатков и повышению надёжности'], ['Имя специалиста, проводившего тестирование и его роль']]
        }, {
            "columns": ["Код тестирования", "Объём проведённых тестов", "Условия тестирования", "Процедура тестирования", "Идентификатор тестового сценария", "Результаты тестирования", "Рекомендации по улучшению", "Ответственный за тестирование"]
        }],
    },
    "index_18":{
        "subtitle": "Результаты",
        "step_of_popup": "Результаты",
        "result":[]
    },
}
window.dataLoaded = true;