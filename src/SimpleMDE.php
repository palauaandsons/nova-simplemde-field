<?php

namespace PalauaAndSons\SimpleMDEField;

use Laravel\Nova\Fields\Field;
use Laravel\Nova\Http\Requests\NovaRequest;

class SimpleMDE extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'simplemde';

    /**
     * Hydrate the given attribute on the model based on the incoming request.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @param  string  $requestAttribute
     * @param  object  $model
     * @param  string  $attribute
     * @return void
     */
    protected function fillAttributeFromRequest(NovaRequest $request, $requestAttribute, $model, $attribute)
    {
        if ($request->exists($requestAttribute)) {
            $model->{$attribute} = $request[$requestAttribute];
        }
    }

    /**
     * Help text.
     *
     * @param $text
     * @return $this
     */
    public function help($text)
    {
        $this->withMeta([
            'help' => is_callable($text) ? call_user_func($text) : $text,
        ]);

        return $this;
    }
}
