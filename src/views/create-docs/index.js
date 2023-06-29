import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import 'suneditor/dist/css/suneditor.min.css' // Import Sun Editor's CSS File
import katex from 'katex'

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false
})

const htmlWithTable = ''

function CreateDocs() {
  const [value, setValue] = useState(htmlWithTable)

  const editorOptions = {
    height: 400,
    buttonList: [
      ['undo', 'redo'],
      ['removeFormat'],
      ['bold', 'underline', 'italic', 'fontSize'],
      ['fontColor', 'hiliteColor'],
      ['align', 'horizontalRule', 'list'],
      ['table', 'link', 'image', 'imageGallery'],
      ['showBlocks', 'codeView'],
      ['math']
    ],
    katex: katex,
    imageRotation: false,
    fontSize: [12, 14, 16, 18, 20],
    colorList: [
      [
        '#828282',
        '#FF5400',
        '#676464',
        '#F1F2F4',
        '#FF9B00',
        '#F00',
        '#fa6e30',
        '#000',
        'rgba(255, 153, 0, 0.1)',
        '#FF6600',
        '#0099FF',
        '#74CC6D',
        '#FF9900',
        '#CCCCCC'
      ]
    ]
  }

  // const onSubmit = data => {
  //   setValue(value)
  //   console.log(data)
  // }

  return (
    <div>
      {/* <form onChange={handleSubmit(onSubmit)}>
        <SunEditor setContents={value} onChange={setValue} setOptions={editorOptions} />
        // <textarea disabled value={value} style={{ width: '100%', resize: 'none', height: '300px' }} />
        <Controller
          disabled
          control={control}
          render={({ field: { onChange, value } }) => (
            <textarea disabled value={value} onChange={onChange} style={{ width: '100%', resize: 'none', height: '600px' }} />
          )}
          name='docs'
        />
      </form>
      <Button type='submit'>Create</Button> */}
      <SunEditor value={value} onChange={setValue} setOptions={editorOptions} />
    </div>
  )
}

export default CreateDocs
