CKEDITOR.plugins.add('cancelChanges', {
    showDelay: 300,
    hideDelay: 200,
    topCorrection: 34,
    leftCorrection: 35,
    tooltipIsShowing: false,

    init: function(editor) {
        var _this = this;

        this.$body = $('body');
        editor.on('instanceReady', function() {
            var editorInstance = $(editor.editable().$);

            editorInstance.on('mouseover', 'ins:not([data-username]), del:not([data-username])', function(e) {
                if (_this.tooltipIsShowing) return;

                clearTimeout(_this.timerShow);
                clearTimeout(_this.timerHide);
                _this.timerShow = setTimeout(function() {_this.showTooltip(e.currentTarget, editor)}, _this.showDelay);
            })

            editorInstance.on('mouseout click', 'ins, del', function(e) {
                clearTimeout(_this.timerShow);
                clearTimeout(_this.timerHide);
                _this.timerHide = setTimeout(function() {_this.hideTooltip()}, _this.hideDelay);
            })
        });

        editor.on('destroy', function() {
            _this.hideTooltip();
        });
    },

    showTooltip: function(target, editor) {
        var _this = this;
        var $tgt = $(target);
        var top = $tgt.offset().top - this.topCorrection;
        var left = $tgt.offset().left + Math.floor($tgt.width() / 2) - this.leftCorrection;

        this.tooltipIsShowing = true;

        $('<div class="ckeditor-tooltip" style="z-index: 100500; position: absolute; left:' + left + 'px; top:' + top + 'px;">' +
            '<span class="ckeditor-tooltip__remove">&#10005;&nbsp;&nbsp;Reject</span>' +
            '</div>')
            .on('mouseover', function() {
                clearTimeout(_this.timerHide);
            })
            .on('mouseout', function() {
                clearTimeout(_this.timerShow);
                _this.timerHide = setTimeout(function() {_this.hideTooltip()}, _this.hideDelay);
            })
            .on('click', function() {
                if($tgt.prop('tagName') === 'DEL') {
                    $tgt.replaceWith(function() {
                        return $(this).html();
                    });
                } else {
                    $tgt.remove();
                }

                _this.hideTooltip();
                editor.focus();
                editor.fire('change');
            })
            .appendTo(this.$body);
    },

    hideTooltip: function() {
        this.tooltipIsShowing = false;
        $('body').find('.ckeditor-tooltip').remove();
    }
});
