import React from 'react'
import dynamic from 'next/dynamic'
import 'suneditor/dist/css/suneditor.min.css' // Import Sun Editor's CSS File

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false
})

const htmlWithTable2 = ''

const defaultFonts = ['Arial', 'Comic Sans MS', 'Courier New', 'Impact', 'Georgia', 'Tahoma', 'Trebuchet MS', 'Verdana']

function CreateDocs() {
  const sortedFontOptions = [
    'Logical',
    'Salesforce Sans',
    'Garamond',
    'Sans-Serif',
    'Serif',
    'Times New Roman',
    'Helvetica',
    ...defaultFonts
  ].sort()

  const [value, setValue] = React.useState(htmlWithTable2)

  return (
    <div>
      <h1>Create new document</h1>
      <br />
      <SunEditor
        setContents={value}
        onChange={setValue}
        setOptions={{
          buttonList: [
            ['undo', 'redo'],
            ['font', 'fontSize'],
            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
            ['fontColor', 'hiliteColor'],
            ['align', 'list', 'lineHeight'],
            ['outdent', 'indent'],
            ['table', 'horizontalRule', 'link', 'image', 'video'],
            ['preview', 'print'],
            ['removeFormat'],
            ['save']
          ], // Or Array of button list, eg. [['font', 'align'], ['image']]
          defaultTag: 'div',
          minHeight: '300px',
          showPathLabel: false,
          font: sortedFontOptions
        }}
      />
      <hr />
      <h2>Example value output:</h2>
      <textarea
        disabled
        value={JSON.stringify(value, null, 2)}
        style={{ width: '100%', resize: 'none', height: '600px' }}
      />
    </div>
  )
}

export default CreateDocs
