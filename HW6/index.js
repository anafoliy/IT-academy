const formDef1 =
    [
        { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
        { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
        { label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
        { label: 'E-mail для связи:', kind: 'shorttext', name: 'email' },
        {
            label: 'Рубрика каталога:', kind: 'combo', name: 'division',
            variants: [{ text: 'здоровье', value: 1 }, { text: 'домашний уют', value: 2 }, { text: 'бытовая техника', value: 3 }]
        },
        {
            label: 'Размещение:', kind: 'radio', name: 'payment',
            variants: [{ text: 'бесплатное', value: 1 }, { text: 'платное', value: 2 }, { text: 'VIP', value: 3 }]
        },
        { label: 'Разрешить отзывы:', kind: 'check', name: 'votes' },
        { label: 'Описание сайта:', kind: 'memo', name: 'description' },
        { caption: 'Опубликовать', kind: 'submit' },
    ];

const formDef2 =
    [
        { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
        { label: 'Имя:', kind: 'longtext', name: 'firstname' },
        { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
        { label: 'Возраст:', kind: 'number', name: 'age' },
        { caption: 'Зарегистрироваться', kind: 'submit' },
    ];

const buildForm = (form, formDef) => {

    form.setAttribute('action', 'https://fe.it-academy.by/TestForm.php');
    for (let i = 0; i < formDef.length; i++) {

        const { label, kind, name, caption } = formDef[i];

        const labelElement = document.createElement('label');
        labelElement.textContent = label;
        labelElement.setAttribute('for', name);
        form.appendChild(labelElement);

        const element = document.createElement(getTag(kind));
        element.setAttribute('type', getType(kind));
        element.setAttribute('id', name);
        element.setAttribute('name', name);

        const { variants } = formDef[i];

        switch (kind) {

            case 'combo':
                for (let i = 0; i < variants.length; i++) {
                    const { text, value } = variants[i];
                    const option = document.createElement('option')
                    option.setAttribute('value', value);
                    option.textContent = text;
                    element.appendChild(option);
                }
                break;

            case 'radio':
                for (let i = 0; i < variants.length; i++) {

                    const { text, value } = variants[i];

                    const input = document.createElement('input')
                    input.setAttribute('type', 'radio');
                    input.setAttribute('id', name + value);
                    input.setAttribute('name', name);

                    const label = document.createElement('label');
                    label.textContent = text;
                    label.setAttribute('for', name + value);

                    element.appendChild(input);
                    element.appendChild(label);
                }
                break;

            case 'check':
                element.setAttribute('type', 'checkbox');
                element.checked = true;
                break;

            case 'submit':
                element.setAttribute('type', 'submit');
                element.setAttribute('name', kind);
                element.value = caption;
                break;

            default:
                break;
        }

        form.appendChild(element);
    }
}

const getTag = (dataType) => {
    switch (dataType) {
        case 'combo':
            return 'select';
        case 'memo':
            return 'textarea';
        case 'radio':
            return 'div';
        default:
            return 'input';
    }
}

const getType = (type) => {
    switch (type) {
        case 'longtext':
            return 'text';
        case 'number':
            return 'number';
        case 'shorttext':
            return 'text';
        case 'check':
            return 'checkbox';
        case 'radio':
            return 'radio';
        default:
            return 'text';
    }
}

const form1 = document.createElement('form');
document.body.appendChild(form1);

const form2 = document.createElement('form');
document.body.appendChild(form2);

buildForm(form1, formDef1);
buildForm(form2, formDef2);


