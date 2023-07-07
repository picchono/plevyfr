(function(){"use strict";fe=document.createElement("style"),fe.innerHTML="@keyframes pulsate{0%,to{opacity:1}50%{opacity:.2}}#spotlight{position:fixed;top:-1px;bottom:-1px;width:100%;z-index:99999;color:#fff;background-color:#000;opacity:0;overflow:hidden;-webkit-user-select:none;-ms-user-select:none;user-select:none;transition:opacity .2s ease-out;font-family:Arial,sans-serif;font-size:16px;font-weight:400;contain:strict;touch-action:none;pointer-events:none}#spotlight.show{opacity:1;transition:none;pointer-events:auto}#spotlight.white{color:#212529;background-color:#fff}#spotlight.white .spl-next,#spotlight.white .spl-page~*,#spotlight.white .spl-prev,#spotlight.white .spl-spinner{filter:invert(1)}#spotlight.white .spl-progress{background-color:rgba(0,0,0,.35)}#spotlight.white .spl-footer,#spotlight.white .spl-header{background-color:rgba(255,255,255,.65)}#spotlight.white .spl-button{background:#212529;color:#fff}.spl-footer,.spl-header{background-color:rgba(0,0,0,.45)}#spotlight .contain,#spotlight .cover{object-fit:cover;height:100%;width:100%}#spotlight .contain{object-fit:contain}#spotlight .autofit{object-fit:none;width:auto;height:auto;max-height:none;max-width:none;transition:none}.spl-scene,.spl-spinner,.spl-track{width:100%;height:100%;position:absolute}.spl-track{contain:strict}.spl-spinner{background-position:center;background-repeat:no-repeat;background-size:42px;opacity:0}.spl-spinner.spin{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2U9IiNmZmYiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2Utb3BhY2l0eT0iLjY1Ij48Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PSIuMTUiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgMTggMTgiIHRvPSIzNjAgMTggMTgiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPjwvZz48L2c+PC9zdmc+);transition:opacity .2s linear .25s;opacity:1}.spl-spinner.error{background-image:url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiB3aWR0aD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYsMUExNSwxNSwwLDEsMCwzMSwxNiwxNSwxNSwwLDAsMCwxNiwxWm0wLDJhMTMsMTMsMCwwLDEsOC40NSwzLjE0TDYuMTQsMjQuNDVBMTMsMTMsMCwwLDEsMTYsM1ptMCwyNmExMywxMywwLDAsMS04LjQ1LTMuMTRMMjUuODYsNy41NUExMywxMywwLDAsMSwxNiwyOVoiIGlkPSJiYW5fc2lnbl9jcm9zc2VkX2NpcmNsZSIvPjwvc3ZnPg==);background-size:128px;transition:none;opacity:.5}.spl-scene{transition:transform .65s cubic-bezier(.1,1,.1,1);contain:layout size;will-change:transform}.spl-pane>*{position:absolute;width:auto;height:auto;max-width:100%;max-height:100%;left:50%;top:50%;margin:0;padding:0;border:0;transform:translate(-50%,-50%) scale(1);transition:transform .65s cubic-bezier(.3,1,.3,1),opacity .65s ease;contain:layout style;will-change:transform,opacity;visibility:hidden}.spl-header,.spl-pane,.spl-progress{position:absolute;top:0}.spl-pane{width:100%;height:100%;transition:transform .65s cubic-bezier(.3,1,.3,1);contain:layout size;will-change:transform,contents}.spl-header{width:100%;height:50px;text-align:right;transform:translateY(-100px);transition:transform .35s ease;overflow:hidden;will-change:transform}#spotlight.menu .spl-footer,#spotlight.menu .spl-header,.spl-footer:hover,.spl-header:hover{transform:translateY(0)}.spl-header div{display:inline-block;vertical-align:middle;white-space:nowrap;width:50px;height:50px;opacity:.5}.spl-progress{width:100%;height:3px;background-color:rgba(255,255,255,.45);transform:translateX(-100%);transition:transform linear}.spl-footer,.spl-next,.spl-prev{position:absolute;transition:transform .35s ease;will-change:transform}.spl-footer{left:0;right:0;bottom:0;line-height:20px;padding:20px 20px 0;padding-bottom:env(safe-area-inset-bottom,0);text-align:left;font-size:15px;font-weight:400;transform:translateY(100%)}.spl-title{font-size:15px}.spl-button,.spl-description,.spl-title{margin-bottom:20px}.spl-button{display:inline-block;background:#fff;color:#000;border-radius:5px;padding:10px 20px;cursor:pointer}.spl-next,.spl-page~*,.spl-prev{background-position:center;background-repeat:no-repeat}.spl-page{float:left;width:auto;line-height:50px}.spl-page~*{background-size:21px;float:right}.spl-fullscreen{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9Ii0xIC0xIDI2IDI2IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggM0g1YTIgMiAwIDAgMC0yIDJ2M20xOCAwVjVhMiAyIDAgMCAwLTItMmgtM20wIDE4aDNhMiAyIDAgMCAwIDItMnYtM00zIDE2djNhMiAyIDAgMCAwIDIgMmgzIi8+PC9zdmc+)}.spl-fullscreen.on{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik04IDN2M2EyIDIgMCAwIDEtMiAySDNtMTggMGgtM2EyIDIgMCAwIDEtMi0yVjNtMCAxOHYtM2EyIDIgMCAwIDEgMi0yaDNNMyAxNmgzYTIgMiAwIDAgMSAyIDJ2MyIvPjwvc3ZnPg==)}.spl-autofit{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9Ijk2cHgiIHZpZXdCb3g9IjAgMCA5NiA5NiIgd2lkdGg9Ijk2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoOTAgNTAgNTApIiBmaWxsPSIjZmZmIiBkPSJNNzEuMzExLDgwQzY5LjY3LDg0LjY2LDY1LjIzLDg4LDYwLDg4SDIwYy02LjYzLDAtMTItNS4zNy0xMi0xMlYzNmMwLTUuMjMsMy4zNC05LjY3LDgtMTEuMzExVjc2YzAsMi4yMSwxLjc5LDQsNCw0SDcxLjMxMSAgeiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwIDUwIDUwKSIgZmlsbD0iI2ZmZiIgZD0iTTc2LDhIMzZjLTYuNjMsMC0xMiw1LjM3LTEyLDEydjQwYzAsNi42Myw1LjM3LDEyLDEyLDEyaDQwYzYuNjMsMCwxMi01LjM3LDEyLTEyVjIwQzg4LDEzLjM3LDgyLjYzLDgsNzYsOHogTTgwLDYwICBjMCwyLjIxLTEuNzksNC00LDRIMzZjLTIuMjEsMC00LTEuNzktNC00VjIwYzAtMi4yMSwxLjc5LTQsNC00aDQwYzIuMjEsMCw0LDEuNzksNCw0VjYweiIvPjwvc3ZnPg==)}.spl-zoom-in,.spl-zoom-out{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+PGxpbmUgeDE9IjgiIHgyPSIxNCIgeTE9IjExIiB5Mj0iMTEiLz48L3N2Zz4=);background-size:22px}.spl-zoom-in{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+PGxpbmUgeDE9IjExIiB4Mj0iMTEiIHkxPSI4IiB5Mj0iMTQiLz48bGluZSB4MT0iOCIgeDI9IjE0IiB5MT0iMTEiIHkyPSIxMSIvPjwvc3ZnPg==)}.spl-download{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxNDEuNzMycHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE0MS43MzIgMTQxLjczMiIgd2lkdGg9IjE0MS43MzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIwLjY3NCwxMjUuMTM4SDIwLjc5M3YxNi41OTRoOTkuODgxVjEyNS4xMzh6IE0xMTkuMDE5LDU4Ljc3NmMtMi41NjEtMi41NjItNi43MTYtMi41NjItOS4yNzUsMEw3Ny4yMSw5MS4zMTJWNi41NjIgICBDNzcuMjEsMi45MzYsNzQuMjY5LDAsNzAuNjQ4LDBjLTMuNjI0LDAtNi41NiwyLjkzNy02LjU2LDYuNTYzdjg0Ljc1TDMxLjk5Miw1OS4yMThjLTIuNTYyLTIuNTY0LTYuNzE1LTIuNTY0LTkuMjc3LDAgICBjLTIuNTY1LDIuNTYyLTIuNTY1LDYuNzE2LDAsOS4yNzlsNDMuMjk0LDQzLjI5M2MwLjE1LDAuMTU0LDAuMzE0LDAuMjk5LDAuNDgxLDAuNDM4YzAuMDc2LDAuMDYyLDAuMTU1LDAuMTEzLDAuMjM0LDAuMTc2ICAgYzAuMDk0LDAuMDY1LDAuMTg2LDAuMTQyLDAuMjc5LDAuMjA2YzAuMDk3LDAuMDYzLDAuMTkyLDAuMTE0LDAuMjg2LDAuMTc0YzAuMDg4LDAuMDU0LDAuMTc0LDAuMTA1LDAuMjY1LDAuMTUzICAgYzAuMSwwLjA1NiwwLjE5OSwwLjEsMC4yOTgsMC4xNDdjMC4wOTcsMC4wNDUsMC4xOSwwLjA5MSwwLjI4MywwLjEzMmMwLjA5OCwwLjA0LDAuMTk2LDAuMDcyLDAuMjk1LDAuMTA1ICAgYzAuMTA0LDAuMDM4LDAuMjA3LDAuMDc4LDAuMzEyLDAuMTA5YzAuMTAxLDAuMDMsMC4xOTcsMC4wNTIsMC4yOTcsMC4wNzdjMC4xMDgsMC4wMjMsMC4yMTQsMC4wNTgsMC4zMjQsMC4wNzggICBjMC4xMTUsMC4wMjEsMC4yMzEsMC4wMzMsMC4zNDYsMC4wNTRjMC4wOTcsMC4wMTUsMC4xOTIsMC4wMzIsMC4yODksMC4wNDJjMC40MywwLjA0MiwwLjg2NSwwLjA0MiwxLjI5NSwwICAgYzAuMS0wLjAxLDAuMTkxLTAuMDI3LDAuMjg5LTAuMDQyYzAuMTE0LTAuMDIxLDAuMjMzLTAuMDI5LDAuMzQ0LTAuMDU0YzAuMTA5LTAuMDIxLDAuMjE3LTAuMDU1LDAuMzI0LTAuMDc4ICAgYzAuMTAyLTAuMDI1LDAuMTk5LTAuMDQ3LDAuMjk5LTAuMDc3YzAuMTA1LTAuMDMxLDAuMjA3LTAuMDcxLDAuMzEyLTAuMTA5YzAuMTAyLTAuMDMsMC4xOTUtMC4wNjIsMC4yOTUtMC4xMDUgICBjMC4wOTYtMC4wNDEsMC4xOTEtMC4wODcsMC4yODMtMC4xMzJjMC4xLTAuMDQ4LDAuMTk5LTAuMDkyLDAuMjk3LTAuMTQ3YzAuMDkxLTAuMDQ4LDAuMTc3LTAuMTA0LDAuMjY0LTAuMTUzICAgYzAuMDk4LTAuMDYsMC4xOTMtMC4xMSwwLjI4Ny0wLjE3NGMwLjA5Ni0wLjA2NCwwLjE4OS0wLjE0MSwwLjI4MS0wLjIwNmMwLjA3Ni0wLjA2MiwwLjE1Ni0wLjExMywwLjIzMy0wLjE3NiAgIGMwLjI0OS0wLjIwNCwwLjQ3OS0wLjQzNywwLjY5NC0wLjY3YzAuMDc2LTAuMDY3LDAuMTU0LTAuMTMxLDAuMjI5LTAuMjAzbDQzLjI5NC00My4yOTYgICBDMTIxLjU4MSw2NS40OTEsMTIxLjU4MSw2MS4zMzcsMTE5LjAxOSw1OC43NzYiLz48L2c+PC9zdmc+);background-size:20px}.spl-theme{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9IjI0cHgiIHZlcnNpb249IjEuMiIgdmlld0JveD0iMiAyIDIwIDIwIiB3aWR0aD0iMjRweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIsNGMtNC40MTgsMC04LDMuNTgyLTgsOHMzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOFMxNi40MTgsNCwxMiw0eiBNMTIsMThjLTMuMzE0LDAtNi0yLjY4Ni02LTZzMi42ODYtNiw2LTZzNiwyLjY4Niw2LDYgUzE1LjMxNCwxOCwxMiwxOHoiLz48cGF0aCBkPSJNMTIsN3YxMGMyLjc1NywwLDUtMi4yNDMsNS01UzE0Ljc1Nyw3LDEyLDd6Ii8+PC9nPjwvc3ZnPg==)}.spl-play{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSItMC41IC0wLjUgMjUgMjUiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwb2x5Z29uIGZpbGw9IiNmZmYiIHBvaW50cz0iMTAgOCAxNiAxMiAxMCAxNiAxMCA4Ii8+PC9zdmc+)}.spl-play.on{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSItMC41IC0wLjUgMjUgMjUiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxsaW5lIHgxPSIxMCIgeDI9IjEwIiB5MT0iMTUiIHkyPSI5Ii8+PGxpbmUgeDE9IjE0IiB4Mj0iMTQiIHkxPSIxNSIgeTI9IjkiLz48L3N2Zz4=);animation:pulsate 1s ease infinite}.spl-close{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIyIDIgMjAgMjAiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bGluZSB4MT0iMTgiIHgyPSI2IiB5MT0iNiIgeTI9IjE4Ii8+PGxpbmUgeDE9IjYiIHgyPSIxOCIgeTE9IjYiIHkyPSIxOCIvPjwvc3ZnPg==)}.spl-next,.spl-prev{top:50%;width:50px;height:50px;opacity:.65;background-color:rgba(0,0,0,.45);border-radius:100%;cursor:pointer;margin-top:-25px;transform:translateX(-100px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cG9seWxpbmUgcG9pbnRzPSIxNSAxOCA5IDEyIDE1IDYiLz48L3N2Zz4=);background-size:30px}.spl-prev{left:20px}.spl-next{left:auto;right:20px;transform:translateX(100px) scaleX(-1)}#spotlight.menu .spl-prev{transform:translateX(0)}#spotlight.menu .spl-next{transform:translateX(0) scaleX(-1)}@media (hover:hover){.spl-page~div{cursor:pointer;transition:opacity .2s ease}.spl-next:hover,.spl-page~div:hover,.spl-prev:hover{opacity:1}}@media (max-width:500px){.spl-header div{width:44px}.spl-footer .spl-title{font-size:20px}.spl-footer{font-size:14px}.spl-next,.spl-prev{width:35px;height:35px;margin-top:-17.5px;background-size:15px 15px}.spl-spinner{background-size:30px 30px}}.hide-scrollbars{overflow:hidden!important}",W=document.getElementsByTagName("head")[0],W.firstChild?W.insertBefore(fe,W.firstChild):W.appendChild(fe),Object.assign||(Object.assign=function(e,t){for(var s,o=Object.keys(t),n=0;n<o.length;n++)s=o[n],e[s]=t[s];return e}),Element.prototype.closest||(Element.prototype.closest=function(e){e=e.substring(1);for(var t=this;t&&1===t.nodeType;){if(t.classList.contains(e))return t;t=t.parentElement}return null});function s(e,t,n){e.classList[n?"add":"remove"](t)}function i(e,t,n){n=""+n,e["_s_"+t]!==n&&(e.style.setProperty(t,n),e["_s_"+t]=n)}je=0;function X(e,t){t&&(i(e,"transition","none"),t()),je||(je=e.clientTop&&0),t&&i(e,"transition","")}function u(e,t,n,s){P(!0,e,t,n,s)}function P(e,t,n,s,o){t[(e?"add":"remove")+"EventListener"](n,s,!o&&!1!==o||o)}function se(e,t){e.stopPropagation(),t&&e.preventDefault()}function A(e,t){i(e,"display",t?"":"none")}function ge(e,t){i(e,"visibility",t?"":"hidden")}function j(e,t){i(e,"transition",t?"":"none")}k="theme download play page close autofit zoom-in zoom-out prev next fullscreen".split(" "),Ge={page:1,close:1,autofit:1,"zoom-in":1,"zoom-out":1,prev:1,next:1,fullscreen:1},o=document.createElement("div"),o.id="spotlight",o.innerHTML="<div class=spl-spinner></div><div class=spl-track><div class=spl-scene><div class=spl-pane></div></div></div><div class=spl-header><div class=spl-page> </div></div><div class=spl-progress></div><div class=spl-footer><div class=spl-title> </div><div class=spl-description> </div><div class=spl-button> </div></div><div class=spl-prev></div><div class=spl-next></div>",le={},Qe=document.createElement("video");function st(e,t,n,s){if("node"!==s)for(var o,i,a,c,l=Object.keys(n),r=0;r<l.length;r++)if(o=l[r],3<o.length&&0===o.indexOf("src"))if("video"===s)if(i=le[o],i){if(0<i){a=n[o];break}}else if(Qe.canPlayType("video/"+o.substring(3).replace("-","").toLowerCase())){le[o]=1,a=n[o];break}else le[o]=-1;else(i=parseInt(o.substring(4),10))&&(i=Math.abs(t-i),!c||i<c)&&(c=i,a=n[o]);return a||n.src||n.href||e.src||e.href}var e,t,n,o,a,r,c,d,h,m,f,p,g,b,y,_,w,x,C,E,k,S,F,z,D,L,I,V,W,q,Y,G,Z,fe,je,Ge,le,Qe,K={},rt=navigator.connection,dt=window.devicePixelRatio||1,ve,Ae,ue,Ce,xe,he,Le,$e,Ke,ae,ie,oe,Te,ce,ye,Me,ze,te,ne,He,We=document.createElement("img"),Ee,Oe,we,_e,pe,be,Se,Ye,ot,me,ke,Ue;u(document,"click",ut);function it(){function e(e){return K[e]=(o||document).getElementsByClassName("spl-"+e)[0]}if(!h){h=document.body,L=e("scene"),Ee=e("header"),Oe=e("footer"),we=e("title"),_e=e("description"),pe=e("button"),be=e("prev"),Se=e("next"),Ye=e("page"),F=e("progress"),me=e("spinner"),V=[e("pane")],v("close",ee),h[g="requestFullscreen"]||h[g="msRequestFullscreen"]||h[g="webkitRequestFullscreen"]||h[g="mozRequestFullscreen"]||(g=""),g?(Ue=g.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit"),Y=v("fullscreen",Be)):k.pop(),v("autofit",T),v("zoom-in",Pe),v("zoom-out",Re),v("theme",re),ot=v("play",M),v("download",lt),u(be,"click",Q),u(Se,"click",H);var s=e("track");u(s,"mousedown",et),u(s,"mousemove",nt),u(s,"mouseleave",Ve),u(s,"mouseup",Ve),u(s,"touchstart",et,{passive:!1}),u(s,"touchmove",nt,{passive:!0}),u(s,"touchend",Ve),u(pe,"click",function(){Z?Z(n,t):Me&&(location.href=Me)})}}function v(e,t){var n=document.createElement("div");return n.className="spl-"+e,u(n,"click",t),Ee.appendChild(n),K[e]=n}function ut(e){var t,n=e.target.closest(".spotlight");if(n){se(e,!0),e=n.closest(".spotlight-group"),b=(e||document).getElementsByClassName("spotlight");for(t=0;t<b.length;t++)if(b[t]===n){I=e&&e.dataset,ct(t+1);break}}}function ct(e){if(m=b.length){h||it(),ae&&ae(e);for(var a,c=V[0],l=c.parentNode,t=V.length;t<m;t++)a=c.cloneNode(!1),i(a,"left",100*t+"%"),l.appendChild(a),V[t]=a;r||(h.appendChild(o),Ie()),n=e||1,j(L),qe(!0),g&&A(Y,0<screen.availHeight-window.innerHeight),history.pushState({spl:1},""),history.pushState({spl:2},""),j(o,!0),s(h,"hide-scrollbars",!0),s(o,"show",!0),Xe(!0),Ie(),N(),S&&M(!0,!0)}}function l(e,n){return e=t[e],"undefined"!=typeof e?(e=""+e,"false"!==e&&(e||n)):n}function Ne(t){t?X(e,Ne):(j(L,He),i(e,"opacity",ne?0:1),tt(te&&.8),z&&s(e,z,!0))}function de(o){if(r=V[o-1],e=r.firstChild,n=o,e)w&&T(),Te&&s(e,Te,!0),Ne(!0),z&&s(e,z),ne&&i(e,"opacity",1),te&&i(e,"transform",""),i(e,"visibility","visible"),E&&(We.src=E),S&&Fe(c);else{var d=y.media,a=l("spinner",!0);if("video"===d)R(a,!0),e=document.createElement("video"),e.onloadedmetadata=function(){e===this&&(e.onerror=null,e.width=e.videoWidth,e.height=e.videoHeight,U(),R(a),de(o))},e.poster=t.poster,e.preload=ye?"auto":"metadata",e.controls=l("controls",!0),e.autoplay=t.autoplay,e.h=l("inline"),e.muted=l("muted"),e.src=y.src,r.appendChild(e);else{if("node"===d){e=y.src,"string"==typeof e&&(e=document.querySelector(e)),e&&(e.g||(e.g=e.parentNode),U(),r.appendChild(e),de(o));return}R(a,!0),e=document.createElement("img"),e.onload=function(){e===this&&(e.onerror=null,R(a),de(o),U())},e.src=y.src,r.appendChild(e)}e&&(a||i(e,"visibility","visible"),e.onerror=function(){e===this&&(J(e),s(me,"error",!0),R(a))})}}function R(e,t){e&&s(me,"spin",t)}function at(){return document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement}function ht(){if(Ie(),e&&U(),g){var t=at();s(Y,"on",t),t||A(Y,0<screen.availHeight-window.innerHeight)}}function Ie(){C=o.clientWidth,ue=o.clientHeight}function U(){Ce=e.clientWidth,xe=e.clientHeight}function tt(t){i(e,"transform","translate(-50%, -50%) scale("+(t||f)+")")}function O(e,t){i(r,"transform",e||t?"translate("+e+"px, "+t+"px)":"")}function B(e,t,n){t?X(L,function(){B(e,!1,n)}):i(L,"transform","translateX("+(100*-e+(n||0))+"%)")}function Xe(e){P(e,window,"keydown",gt),P(e,window,"wheel",ft),P(e,window,"resize",ht),P(e,window,"popstate",mt)}function mt(e){r&&e.state.spl&&ee(!0)}function gt(e){if(r){var n=!1!==t["zoom-in"];switch(e.keyCode){case 8:n&&T();break;case 27:ee();break;case 32:S&&M();break;case 37:Q();break;case 39:H();break;case 38:case 107:case 187:n&&Pe();break;case 40:case 109:case 189:n&&Re()}}}function ft(e){r&&!1!==t["zoom-in"]&&(e=e.deltaY,0>.5*(0>e?1:e?-1:0)?Re():Pe())}function M(e,t){("boolean"==typeof e?e:!c)===!c&&(c=c?clearTimeout(c):1,s(ot,"on",c),t||Fe(c))}function Fe(e){Ke&&(X(F,function(){i(F,"transition-duration",""),i(F,"transform","")}),e&&(i(F,"transition-duration",ze+"s"),i(F,"transform","translateX(0)"))),e&&(c=setTimeout(H,1e3*ze))}function N(){ce&&(ke=Date.now()+2950,p||(s(o,"menu",!0),Ze(3e3)))}function Ze(e){p=setTimeout(function(){var e=Date.now();e>=ke?(s(o,"menu"),p=0):Ze(ke-e)},e)}function Je(e){"boolean"==typeof e&&(p=e?p:0),p?(p=clearTimeout(p),s(o,"menu")):N()}function et(e){se(e,!0),he=!0,q=!1;var t=e.touches;t&&(t=t[0])&&(e=t),Le=Ce*f<=C,ve=e.pageX,Ae=e.pageY,j(r)}function Ve(e){if(se(e),he){if(q){if(Le&&q){var t=(e=a<-(C/7)&&(n<m||x))||a>C/7&&(1<n||x);(e||t)&&(B(n-1,!0,a/C*100),e&&H()||t&&Q()),a=0,O()}j(r,!0)}else Je();he=!1}}function nt(e){if(se(e),he){var t=e.touches;t&&(t=t[0])&&(e=t),t=(Ce*f-C)/2,a-=ve-(ve=e.pageX),Le||(a>t?a=t:a<-t&&(a=-t),xe*f>ue&&(t=(xe*f-ue)/2,d-=Ae-(Ae=e.pageY),d>t?d=t:d<-t&&(d=-t))),q=!0,O(a,d)}else N()}function Be(e){var t=at();("boolean"!=typeof e||e!==!!t)&&(t?document[Ue]():o[g]())}function re(e){"string"!=typeof e&&(e=_?"":G||"white"),_!==e&&(_&&s(o,_),e&&s(o,e,!0),_=e)}function T(t){"boolean"==typeof t&&(w=!t),w=1===f&&!w,s(e,"autofit",w),i(e,"transform",""),f=1,d=a=0,U(),j(r),O()}function Pe(){var e=f/.65;50>=e&&(w&&T(),a/=.65,d/=.65,O(a,d),De(e))}function Re(){var e=.65*f;w&&T(),1<=e&&(1===e?a=d=0:(a*=.65,d*=.65),O(a,d),De(e))}function De(e){f=e||1,tt()}function lt(){var s=h,t=document.createElement("a"),n=e.src;t.href=n,t.download=n.substring(n.lastIndexOf("/")+1),s.appendChild(t),t.click(),s.removeChild(t)}function ee(n){setTimeout(function(){h.removeChild(o),r=e=y=t=I=b=ae=ie=oe=Z=null},200),s(h,"hide-scrollbars"),s(o,"show"),Be(!1),Xe(),history.go(!0===n?-1:-2),E&&(We.src=""),c&&M(),e&&J(e),p&&(p=clearTimeout(p)),_&&re(),D&&s(o,D),oe&&oe()}function J(e){if(e.g)e.g.appendChild(e),e.g=null;else{var t=e.parentNode;t&&t.removeChild(e),e.src=e.onerror=""}}function Q(e){if(e&&N(),1<m){if(1<n)return $(n-1);if(x)return B(m,!0),$(m)}}function H(e){if(e&&N(),1<m){if(n<m)return $(n+1);if(x)return B(-1,!0),$(1);c&&M()}}function $(e){if(e!==n){c?(clearTimeout(c),Fe()):N();var t=e>n;return n=e,qe(t),!0}}function pt(e){var a,c,d,r=b[n-1],i=r;if(t={},I&&Object.assign(t,I),Object.assign(t,i.dataset||i),$e=t.media,Z=t.onclick,G=t.theme,D=t.class,ce=l("autohide",!0),x=l("infinite"),Ke=l("progress",!0),S=l("autoslide"),ye=l("preload",!0),Me=t.buttonHref,ze=S&&parseFloat(S)||7,_||G&&re(G),D&&s(o,D,!0),D&&X(o),i=t.control){i="string"==typeof i?i.split(","):i;for(a=0;a<k.length;a++)t[k[a]]=!1;for(a=0;a<i.length;a++)c=i[a].trim(),"zoom"===c?t["zoom-in"]=t["zoom-out"]=!0:t[c]=!0}if(i=t.animation,te=ne=He=!i,z=!1,i)for(i="string"==typeof i?i.split(","):i,a=0;a<i.length;a++)c=i[a].trim(),"scale"===c?te=!0:"fade"===c?ne=!0:"slide"===c?He=!0:c&&(z=c);Te=t.fit,a=rt&&rt.downlink,i=Math.max(ue,C)*dt,a&&1200*a<i&&(i=1200*a),y={media:$e,src:st(r,i,t,$e),title:l("title",r.alt||r.title||(d=r.firstElementChild)&&(d.alt||d.title))},E&&(We.src=E=""),ye&&e&&(r=b[n])&&(e=r.dataset||r,(d=e.media)&&"image"!==d||(E=st(r,i,e,d)));for(r=0;r<k.length;r++)e=k[r],A(K[e],l(e,Ge[e]))}function qe(c){d=a=0,f=1,e&&(e.onerror?J(e):(u=e,setTimeout(function(){u&&e!==u&&(J(u),u=null)},650),Ne(),O())),pt(c),B(n-1),s(me,"error"),de(n),j(r),O(),c=y.title;var u,h=l("description"),p=l("button"),g=c||h||p;g&&(c&&(we.firstChild.nodeValue=c),h&&(_e.firstChild.nodeValue=h),p&&(pe.firstChild.nodeValue=p),A(we,c),A(_e,h),A(pe,p),i(Oe,"transform","all"===ce?"":"none")),ce||s(o,"menu",!0),ge(Oe,g),ge(be,x||1<n),ge(Se,x||n<m),Ye.firstChild.nodeValue=1<m?n+" / "+m:"",ie&&ie(n,t)}window.Spotlight={init:it,theme:re,fullscreen:Be,download:lt,autofit:T,next:H,prev:Q,goto:$,close:ee,zoom:De,menu:Je,show:function(e,t,n){b=e,t&&(I=t,ae=t.onshow,ie=t.onchange,oe=t.onclose,n=n||t.index),ct(n)},play:M,addControl:v,removeControl:function(e){var t=K[e];t&&(Ee.removeChild(t),K[e]=null)}}}).call(this)