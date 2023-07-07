import { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() { 
        return (
            <div className='bg-zinc-200'>
                <h3 class="mb-2 mt-0 text-3xl font-medium leading-tight text-primary">>Productos</h3>
                <ul
                    class="mb-5 flex list-none flex-col flex-wrap pl-0 md:flex-row"
                    id="pills-tab"
                    role="tablist"
                    data-te-nav-ref
                >
                    <li>
                        <Link className='class="my-2 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"' to={'/'}>Home</Link>
                    </li>
                    |
                    <li>
                        <Link className='class="my-2 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"' to={'/create'}>Crear</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default NavBar;