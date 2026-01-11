module.exports = ({ env }) => ({
  ckeditor: {
    enabled: true,
    config:{
      editor:{
        toolbar: {
          items: [

            'bold',
            'italic',
            'fontColor',
            'fontBackgroundColor',
            'underline',
            '|',
            'bulletedList',
            'todoList',
            'numberedList',
            '|',
            'alignment',
            'horizontalLine',
            '|',
            'insertTable',
            'code',
            'link',
            '|',
            'subscript',
            'superscript',
            'strikethrough',
            'specialCharacters',
            '|',
            "fullScreen",
            'undo',
            'redo'
          ]
        },
        fontColor: {
          columns: 5,
          documentColors: 10,
        },
        fontBackgroundColor: {
          columns: 5,
          documentColors: 10,
        },
        image: {
          resizeUnit: "%",
          resizeOptions: [{
            name: 'resizeImage:original',
            value: null,
            icon: 'original'
          },
            {
              name: 'resizeImage:25',
              value: '25',
              icon: 'small'
            },
            {
              name: 'resizeImage:50',
              value: '50',
              icon: 'medium'
            },
            {
              name: 'resizeImage:75',
              value: '75',
              icon: 'large'
            }],
          toolbar: [
            'toggleImageCaption',
            'imageTextAlternative',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            'linkImage',
            'resizeImage:25', 'resizeImage:50', 'resizeImage:75', 'resizeImage:original'
          ],
        },
        table: {
          contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableCellProperties',
            'tableProperties',
            'toggleTableCaption'
          ]
        },
        mediaEmbed: {
          extraProviders: [
            {
              name: 'Embed',
              url: /.+/,
            },
          ],
        },
        heading: {
          options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
          ]
        },
        link: {
          decorators: {
            openInNewTabInternal: {
              mode: 'manual',
              label: 'Open in a new tab internal',
              defaultValue: true,
              attributes: {
                target: '_blank',
              }
            },
            openInNewTabExternal: {
              mode: 'manual',
              label: 'Open in a new tab external',
              defaultValue: true,
              attributes: {
                target: '_blank',
                rel: 'nofollow noreferrer'
              }
            }
          }
        },
        htmlSupport: {
          allow: [
            {
              name: 'img',
              attributes: {
                id: true,
                sizes:true,
                loading:true,
              }
            },
          ]
        },
      }
    }
  },
});
