<?php

namespace Lgf\Markdown;

use Laravel\Nova\Fields\Field;
use Laravel\Nova\Http\Requests\NovaRequest;

class Markdown extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'markdown';

    /**
     * Hydrate the given attribute on the model based on the incoming request.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @param  string  $requestAttribute
     * @param  object  $model
     * @param  string  $attribute
     * @return void
     */
    protected function fillAttributeFromRequest(NovaRequest $request,
        $requestAttribute,
        $model,
        $attribute)
    {
        if ($request->exists($requestAttribute)) {
            $model->{$attribute} = $request[$requestAttribute];
        }
    }
}
