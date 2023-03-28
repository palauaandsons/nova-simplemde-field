<?php

namespace PalauaAndSons\SimpleMDEField;

use Laravel\Nova\Fields\Field;

class SimpleMDE extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'nova-simplemde-field';

    /**
     * Help text.
     *
     * @param $text
     */
    public function help($text): self
    {
        $this->withMeta([
            'help' => is_callable($text) ? call_user_func($text) : $text,
        ]);

        return $this;
    }
}
