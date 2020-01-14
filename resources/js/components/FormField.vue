<template>
    <field-wrapper>
        <div class="w-1/5 px-8 py-6">
            <slot>
                <form-label :for="field.name">
                    {{ field.name }}
                </form-label>
            </slot>
        </div>
        <div class="w-4/5 px-8 py-6">
            <textarea
                ref="theTextArea"
                :id="field.name"
                class="w-full form-control form-input form-input-bordered"
                :class="errorClasses"
                :placeholder="field.name"
                v-model="value"
            />

            <p class="help-text help-text mt-2">
                {{ field.help }}
            </p>

            <p v-if="hasError" class="my-2 text-danger">
                {{ firstError }}
            </p>
        </div>
    </field-wrapper>
</template>

<script>
import SimpleMDE from 'simplemde'
import { FormField, HandlesValidationErrors } from 'laravel-nova'

require('simplemde/dist/simplemde.min.css');

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],

    data() {
        return {
            simplemde: null
        }
    },

    mounted() {
        this.simplemde = new SimpleMDE({
            element: this.$refs.theTextarea,
            spellChecker: false,
            showIcons: ['heading-1', 'heading-2', 'heading-3'],
            hideIcons: ['image', 'preview', 'side-by-side'],
            toolbar: [
                'bold', 'italic', 'heading',
                'heading-1', 'heading-2', 'heading-3',
                '|',
                'quote', 'unordered-list', 'ordered-list',
                '|',
                'link',
                {
                    name: 'link-internal',
                    action: function (editor) {
                        let cm = editor.codemirror;
                        let cursor = cm.getCursor();

                        cm.replaceRange('[](/internal)', {line: cursor.line, ch: cursor.ch});
                    },
                    className: 'fa fa-external-link fa-rotate-180',
                    title: 'Internal Link',
                },
                {
                    name: 'link-nofollow',
                    action: function (editor) {
                        let cm = editor.codemirror;
                        let cursor = cm.getCursor();

                        cm.replaceRange('[](http://){rel="nofollow"}', {line: cursor.line, ch: cursor.ch});
                    },
                    className: 'fa fa-external-link',
                    title: 'External Link',
                },
                '|',
                {
                    name: 'image-markdown',
                    action: function (editor) {
                        let cm = editor.codemirror;
                        let cursor = cm.getCursor();

                        cm.replaceRange('@image(id)', {line: cursor.line, ch: cursor.ch});
                    },
                    className: 'fa fa-picture-o',
                    title: 'Image'
                },
                {
                    name: 'image-markdown-left',
                    action: function (editor) {
                        let cm = editor.codemirror;
                        let cursor = cm.getCursor();

                        cm.replaceRange('@image(id, left)', {line: cursor.line, ch: cursor.ch});
                    },
                    className: 'fa fa-file-image-o',
                    title: 'Image Left'
                },
                {
                    name: 'image-markdown-right',
                    action: function (editor) {
                        let cm = editor.codemirror;
                        let cursor = cm.getCursor();

                        cm.replaceRange('@image(id, right)', {line: cursor.line, ch: cursor.ch});
                    },
                    className: 'fa fa-file-image-o',
                    title: 'Image Right'
                },
                '|',
                {
                    name: 'quote',
                    action: function (editor) {
                        let cm = editor.codemirror;
                        let cursor = cm.getCursor();

                        cm.replaceRange('@quote("name", "text here...")', {line: cursor.line, ch: cursor.ch});
                    },
                    className: 'fa fa-quote-right',
                    title: 'Quote'
                },
                '|',
//                    {
//                        name: 'instagram',
//                        action: function (editor) {
//                            let cm = editor.codemirror;
//                            let cursor = cm.getCursor();
//
//                            cm.replaceRange('@instaram(id)', {line: cursor.line, ch: cursor.ch});
//                        },
//                        className: 'fa fa-instagram',
//                        title: 'Instagram'
//                    },
                {
                    name: 'vimeo',
                    action: function (editor) {
                        let cm = editor.codemirror;
                        let cursor = cm.getCursor();

                        cm.replaceRange('@vimeo(id)', {line: cursor.line, ch: cursor.ch});
                    },
                    className: 'fa fa-vimeo',
                    title: 'Vimeo'
                },
                {
                    name: 'youtube',
                    action: function (editor) {
                        let cm = editor.codemirror;
                        let cursor = cm.getCursor();

                        cm.replaceRange('@youtube(id)', {line: cursor.line, ch: cursor.ch});
                    },
                    className: 'fa fa-youtube-play',
                    title: 'Youtube'
                },
                '|',
                'fullscreen',
                '|', {
                    name: 'guide',
                    action: function () {
                        window.open(window.location.origin + '/loquero/markdown', '_blank');
                    },
                    className: 'fa fa-question-circle',
                    title: 'Markdown Guide',
                }
            ]
        });

        this.simplemde.codemirror.on('change', (cm, changeObj) => {
            this.value = this.simplemde.value();
        })

        if (this.field.value) {
            this.simplemde.value(this.field.value);
        }

    },

    methods: {
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
          this.value = this.field.value || ''
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
          formData.append(this.field.attribute, this.value || '')
        },

        /**
         * Update the field's internal value.
         */
        handleChange(value) {
          this.value = value
        }
    }
}
</script>
