import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                Home: 'Home',
                About: 'About me',
                Skills: 'Skills',
                Contacts: 'Contacts',
                Menu: 'Menu',
                My_Hard_Skills: 'My Hard Skills',
                Hello: 'Hello I`m',
                developer: 'Junior Frontend Developer',
                Name: 'Ruslan Storonskyi',
                About_me: 'Briefly about me.',
                Main_text: {
                   1: 'I am 30 years old, I live in Ukraine, in the city of Lviv.',
                   2:'I want to try myself in the field of information technology, namely in web development.',
                   3:'My soft skills are teamwork, creativity, sociability,  strong organizational skills,',
                   4: 'ability to solve problems and tasks.',
                   5:'I can in working under pressure and adapting to new situations and challenges.',
                   6: 'I also have experience in personnel management and management positions.',
                   7: 'English is below average– Pre-Intermediate (A2)'

                },
                Download_CV: 'Download CV',
                Contact_Me: 'Contact Me',
                Send_Message: 'Send a Message',



            }
        },

        ua: {
            translation: {
                Home: 'Головна',
                About: 'Про мене',
                Skills: 'Навики',
                Contacts: 'Контакти',
                Menu: 'Меню',
                My_Hard_Skills: 'Мої технічні навики',
                Hello: 'Привіт я',
                Name: 'Сторонський Руслан',
                developer: 'Junior Frontend Developer',
                About_me: 'Коротко про себе',
                Main_text: {
                    1: 'Мені 30 років, я живу в Україні, у місті Львів.',
                    2:'Я хочу спробувати себе в сфері інформаційних технологій, а саме у веб-розробці.',
                    3:'Мої "soft skills" це: командна робота, креативність, комунікабельність, ' ,
                    4: 'вміння вирішувати проблеми та задачі, сильні організаційні здібності',
                    5:'Я можу працювати під тиском і адаптуватися до нових ситуацій і викликів.',
                    6: 'Також маю досвід роботи в управлінні персоналом та на керівних посадах.',
                    7: 'Англійська нижче середнього– Pre-Intermediate (A2)'
 
                 },
                 Download_CV: 'Завантажити Резюме',
                 Contact_Me: 'Зв`язатися зі мною',
                 Send_Message: 'Надіслати повідомлення',

            }
        },

        
        pl: {
            translation: {
                Home: 'Główna',
                About: 'O mnie',
                Skills: 'Umiejętności',
                Contacts: 'kontakt',
                Menu: 'Menu',
                My_Hard_Skills: 'Moje umiejętności techniczne',
                Hello: 'Witam ja jestem',
                Name: 'Rusłan Storońskyi',
                developer: 'Junior Frontend Developer',
                About_me: 'Krótko o sobie',
                Main_text: {
                    1: 'Mam 30 lat, mieszkam w Ukrainie we Lwowie.',
                    2: 'Chcę spróbować swoich sił w branży technologii informatycznych, "Web Developer".',
                    3:'Moje "soft skills" to praca zespołowa, kreatywność, komunikacja, ' ,
                    4: 'umiejętność rozwiązywania problemów i zadań, silne zdolności organizacyjne',
                    5:'Potrafię pracować pod presją i dostosowywać się do nowych sytuacji i wyzwań.',
                    6: 'Posiadam również doświadczenie na stanowiskach kierowniczych i zarządczych.',
                    7: 'Angielski poniżej średniej – Pre-Intermediate (A2)'
 
                 },
                 Download_CV: 'Pobierz CV',
                 Contact_Me: 'Skontaktuj się ze mną',
                 Send_Message: 'Wysłać wiadomość',

            }
        },


    },
    lng: "en",

});

export default i18next;