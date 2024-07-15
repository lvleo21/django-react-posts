from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class BasePagination(PageNumberPagination):
    page_size_query_param = 'size'

    def get_paginated_response(self, data):
        num_pages = current_page = 0

        if self.page:
            num_pages = self.page.paginator.num_pages
            current_page = self.page.number

        return Response({
            'links': {
                'previous': self.get_previous_link(),
                'next': self.get_next_link(),
            },
            'count': self.page.paginator.count,
            'num_pages': num_pages,
            'current_page': current_page,
            'results': data
        })
