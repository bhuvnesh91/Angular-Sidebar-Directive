# Angular-Sidebar-Directive
bb-sidebar is basically a sidebar directive with animations using **show/hide** arrow icon.

# For Usage
1. Include js and html file in your project both at same location or update templateUrl path.
2. Add **BB** module dependency to your angular module. 
3. Then just add following markup for creating sidebar:
```html
<bb-sidebar state="false" list-items="getSideListItems()"></bb-sidebar>
```
where
    'state' represents initial state to keep bb-sidebar open or close,
    'getSideListItems()' represents data to show in bb-sidebar.
  
In items you can pass following properties for list items:
- route (where to redirect)
- font (fontawesome icon)
- name (name for list item)

or you can update template according to your need.
