import {
  Form,
  FormError,
  FieldError,
  Label,
  CheckboxField,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const JournalEntryForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.journalEntry?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="published"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Published
        </Label>
        <CheckboxField
          name="published"
          defaultChecked={props.journalEntry?.published}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="published" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.journalEntry?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="authorId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Author id
        </Label>
        <NumberField
          name="authorId"
          defaultValue={props.journalEntry?.authorId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="authorId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default JournalEntryForm
